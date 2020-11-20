import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyStore } from 'src/app/keystore';
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
}