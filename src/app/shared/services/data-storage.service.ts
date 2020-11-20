import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeyStore } from 'src/app/keystore';
import { ReciepeService } from 'src/app/reciepes/services/reciepe.service';

@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private httpClient : HttpClient, private reciepeService : ReciepeService){}

    saveReciepes(){
        const httpheaders = new HttpHeaders();
        httpheaders.set('Access-Control-Allow-Origin', '*');
        httpheaders.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
        httpheaders.set('Access-Control-Allow-Headers', '*');

        const reciepes = this.reciepeService.getReciepes();
        this.httpClient.put("https://rbk-project-c4172.firebaseio.com/reciepes.json", reciepes).subscribe((response)=>{
            console.log(response);
        });
    }
}