import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { Reciepe } from '../model/reciepe.model';

@Injectable({providedIn:'root'})
export class ReciepeResolverService implements Resolve<Reciepe[]>{
    constructor(private dataStorageService: DataStorageService){}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
        return this.dataStorageService.getReciepes();
    }
}