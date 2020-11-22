import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
    providedIn:'root'
})
export class AuthGuardSerive implements CanActivate{
    constructor(private authService : AuthService, private router : Router){}
    canActivate(route : ActivatedRouteSnapshot, router : RouterStateSnapshot) : boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        return this.authService.userSubject.pipe(take(1),map(user => {
            const isAuthenticated = !!user;
            if(isAuthenticated){
                return isAuthenticated;
            }
            return this.router.createUrlTree(['login']);
        }));
    }
}