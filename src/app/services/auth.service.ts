import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthRequest } from '../contract/auth/auth-request.model';
import { AuthResponse } from '../contract/auth/auth-response.model';
import { FireBase, KeyStore } from '../keystore';
import { ErrorMessage } from '../shared/error/error-message';
import { FirebaseErrorMessage } from '../shared/error/firebase-error-message';

@Injectable({
    providedIn:'root'
})
export class AuthService {
    constructor(private http : HttpClient){}

    register(email : string, password:string){
        let request = new AuthRequest(email, password, true);
        return this.http.post<AuthResponse>(FireBase.BaseUrl+FireBase.Register+FireBase.ApiKey, 
        request)
        .pipe(catchError(this.handleError));
    }

    login(email:string, password : string){
        let request = new AuthRequest(email, password, true);
        return this.http.post<AuthResponse>(FireBase.BaseUrl+FireBase.Login+FireBase.ApiKey, 
        request)
        .pipe(catchError(this.handleError));
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