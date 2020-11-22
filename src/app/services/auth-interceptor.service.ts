import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn:'root'
})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService : AuthService){}
    intercept(request : HttpRequest<any>, handler : HttpHandler){
        return this.authService.userSubject.pipe(take(1), exhaustMap(user =>{
            if(!user){
                return handler.handle(request);
            }
            const modifiedRequest = request.clone({params:new HttpParams().set('auth', user.token)})
            return handler.handle(modifiedRequest);
        }))
    }
}