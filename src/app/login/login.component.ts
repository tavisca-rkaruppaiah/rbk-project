import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../contract/auth/auth-response.model';
import { AuthService } from '../services/auth.service';

@Component({
    selector : "app-login",
    templateUrl:"./login.component.html"
})
export class LoginComponent{
    isLoginMode = false;
    isLoading = false;
    errorMessage:string = null;
    authenticationObservable : Observable<AuthResponse>;
    @ViewChild("loginForm") loginForm : NgForm;

    constructor(private authService : AuthService, private router : Router){}

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(){
        if(!this.loginForm.valid){
            return;
        }
        this.isLoading = true;
        const email = this.loginForm.value.email;
        const password = this.loginForm.value.password;
        if(this.isLoginMode){
            this.onLogin(email, password);
        }else{
            this.onRegister(email, password);
        }
        this.onReset();
    }

    onRegister(email:string, password:string){
        this.authenticationObservable = this.authService.register(email, password);
        this.handleResponse();
    }

    onLogin(email : string, password : string){
        this.authenticationObservable = this.authService.login(email, password);
        this.handleResponse();
    }

    onReset(){
        this.loginForm.reset();
    }

    private handleResponse(){
        this.authenticationObservable.subscribe(response => {
            console.log(response);
            this.isLoading = false;
            this.router.navigate(['reciepes']);
        }, errorMessage => {
            this.errorMessage = errorMessage;
            this.isLoading = false;
        });
    }
}