import { from } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
    collapsed = true;
    @Output() feature = new EventEmitter<string>();
    onSelect(selectedFeature : string){
        this.feature.emit(selectedFeature);
    }
}