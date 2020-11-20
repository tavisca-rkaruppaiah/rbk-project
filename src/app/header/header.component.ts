import { from } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReciepeService } from '../reciepes/services/reciepe.service';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
    collapsed = true;
    constructor(private dataStorageService : DataStorageService){}

    saveReciepes(){
        this.dataStorageService.saveReciepes();
    }
}