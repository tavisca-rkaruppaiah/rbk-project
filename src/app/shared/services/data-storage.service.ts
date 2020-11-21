import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { KeyStore } from 'src/app/keystore';
import { Reciepe } from 'src/app/reciepes/model/reciepe.model';
import { ReciepeService } from 'src/app/reciepes/services/reciepe.service';

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http : HttpClient, private reciepeService:ReciepeService){

    }
    saveReciepes(){
        const reciepes = this.reciepeService.getReciepes();
        this.http.put(KeyStore.baseUrl+"/reciepes.json", reciepes).subscribe((response) => {
            console.log(response);
        })
    }

    getReciepes(){
        return this.http.get<Reciepe[]>(KeyStore.baseUrl+"/reciepes.json")
        .pipe(map( reciepes => {
            return reciepes.map(reciepe => {
                return {
                    ...reciepe, 
                    ingredients : reciepe.ingredients ? reciepe.ingredients : []
                };
            })
        }), tap(reciepes => {
            this.reciepeService.setReciepes(reciepes);
        }));
    }
}