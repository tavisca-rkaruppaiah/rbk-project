import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as fromApp from '../store/app.reducer';

@Injectable({
    providedIn:'root'
})
export class AuthInterceptorService implements HttpInterceptor {
    constructor(
        private authService : AuthService,
        private store : Store<fromApp.AppState>
    ){}
    intercept(request : HttpRequest<any>, handler : HttpHandler){
        return this.store.select("auth")
        .pipe(
            take(1),
            map(authState =>{
                return authState.user;
            }), exhaustMap(user =>{
            if(!user){
                return handler.handle(request);
            }
            const modifiedRequest = request.clone({params:new HttpParams().set('auth', user.token)})
            return handler.handle(modifiedRequest);
        }))
    }
}