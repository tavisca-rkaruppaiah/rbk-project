import { from, Subscription } from 'rxjs';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy{
    collapsed = true;
    userSubscription : Subscription;
    isAuthenticated : boolean = false;
    constructor(
        private dataStorageService : DataStorageService,
        private authService : AuthService
    ){}

    ngOnInit() :void {
        this.userSubscription = this.authService.userSubject.subscribe(user =>{
            this.isAuthenticated = !!user;
            console.log(!user);
            console.log(!!user);
        });
    }

    saveReciepes(){
        this.dataStorageService.saveReciepes();
    }

    getReciepes(){
        this.dataStorageService.getReciepes().subscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy() : void{
        this.userSubscription.unsubscribe();
    }
}