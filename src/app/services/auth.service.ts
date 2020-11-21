import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from '../contract/auth/auth-request.model';
import { AuthResponse } from '../contract/auth/auth-response.model';
import { FireBase, KeyStore } from '../keystore';

@Injectable({
    providedIn:'root'
})
export class AuthService {
    constructor(private http : HttpClient){}

    register(email : string, password:string){
        let request = new AuthRequest(email, password, true);
        return this.http.post<AuthResponse>(FireBase.BaseUrl+FireBase.Register+FireBase.ApiKey, 
        request);
    }

    login(email:string, password : string){
        let request = new AuthRequest(email, password, true);
        return this.http.post<AuthResponse>(FireBase.BaseUrl+FireBase.Login+FireBase.ApiKey, 
        request);
    }
}