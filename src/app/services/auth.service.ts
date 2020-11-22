import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthRequest } from '../contract/auth/auth-request.model';
import { AuthResponse } from '../contract/auth/auth-response.model';
import { FireBase } from '../keystore';
import { User } from '../model/user.model';
import { ErrorMessage } from '../shared/error/error-message';
import { FirebaseErrorMessage } from '../shared/error/firebase-error-message';

@Injectable({
    providedIn:'root'
})
export class AuthService {
    userSubject = new BehaviorSubject<User>(null);
    tokenExpirationTimer : any;
    constructor(
        private http : HttpClient,
        private router : Router
    ){}

    register(email : string, password:string){
        let request = new AuthRequest(email, password, true);
        return this.http
                    .post<AuthResponse>(FireBase.BaseUrl+FireBase.Register+FireBase.ApiKey, request)
                    .pipe(catchError(this.handleError), tap(response => {
                        this.handleAuthentication(response.localId, response.email, response.idToken, +response.expiresIn)
                    }));
    }

    login(email:string, password : string){
        let request = new AuthRequest(email, password, true);
        return this.http
                    .post<AuthResponse>(FireBase.BaseUrl+FireBase.Login+FireBase.ApiKey, request)
                    .pipe(catchError(this.handleError), tap(response => {
                        this.handleAuthentication(response.localId, response.email, response.idToken, +response.expiresIn)
                    }));
    }

    logout(){
        this.userSubject.next(null);
        this.router.navigate(['login']);
        localStorage.removeItem("userData");
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration : number){
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout()
        }, expirationDuration);
    }

    autoLogin(){
        const userData : {
            email : string,
            id:string,
            _token : string,
            _tokenExpirationDate : string
        } = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }

        const user = new User(userData.id, userData.email, userData._token, new Date(userData._tokenExpirationDate));

        if(!user.token){
            return;
        }
        this.userSubject.next(user);
        const duration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
        this.autoLogout(duration);
    }

    private handleAuthentication(id : string, email:string, token : string, expiresIn : number){
        const tokenExpireDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(id, email, token, tokenExpireDate);
        this.userSubject.next(user);
        this.autoLogout(+expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorResponse : HttpErrorResponse){
        let errorMessage = 'An error occured';
            if(!errorResponse.error || !errorResponse.error.error){
                return throwError(errorMessage);
            }
            switch(errorResponse.error.error.message){
                case FirebaseErrorMessage.EmailExists:
                    errorMessage = ErrorMessage.EmailExists;
                    break;
                case FirebaseErrorMessage.EmailNotFound:
                    errorMessage = ErrorMessage.EmailNotFound;
                    break;
                case FirebaseErrorMessage.InvalidPassword:
                    errorMessage = ErrorMessage.InvalidPassword;
                    break;
            }
            return throwError(errorMessage);
    }
}