import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, from, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private _service : AuthService,private _router : Router,) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(Promise.resolve(this._service.getToken)).pipe(
        switchMap(token => {
            let modifiedReq = req;
            if (token) {
                modifiedReq = req.clone({
                    headers: req.headers.set('Authorization', `Bearer ${token}`)
                });
            }
            return next.handle(modifiedReq).pipe(
                catchError((err: HttpErrorResponse) => {
                    console.log(err);
                    if (err.status == 498) {

                      // Changer here to show alert when token expire
                        // this.showAlert(err.error.message,'Please Login Again' );

                        this._service.logOut();
                        this._router.navigateByUrl('/login')
                    }
                    return throwError(err);
                })
            );
        })
    );
}


}
