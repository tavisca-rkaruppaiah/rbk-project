import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector : "app-login",
    templateUrl:"./login.component.html"
})
export class LoginComponent{
    isLoginMode = false;
    isLoading = false;
    @ViewChild("loginForm") loginForm : NgForm;

    constructor(private authService : AuthService){}

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
        this.authService.register(email, password).subscribe(response => {
            console.log(response);
            this.isLoading = false;
        }, error => {
            console.log(error);
            this.isLoading = false;
        });
    }

    onLogin(email : string, password : string){
        this.authService.login(email, password).subscribe(response => {
            console.log(response);
            this.isLoading = false;
        }, error => {
            console.log(error);
            this.isLoading = false;
        });
    }

    onReset(){
        this.loginForm.reset();
    }
}