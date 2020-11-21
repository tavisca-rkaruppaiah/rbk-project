import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector : "app-login",
    templateUrl:"./login.component.html"
})
export class LoginComponent{
    isLoginMode = false;
    @ViewChild("loginForm") loginForm : NgForm;

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(){
        console.log(this.loginForm.value);
        this.onReset();
    }

    onReset(){
        this.loginForm.reset();
    }
}