import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ReciepeDetailComponent } from './reciepe-detail/reciepe-detail.component';
import { ReciepeEditComponent } from './reciepe-edit/reciepe-edit.component';
import { ReciepeItemComponent } from './reciepe-list/reciepe-item/reciepe-item.component';
import { ReciepeListComponent } from './reciepe-list/reciepe-list.component';
import { ReciepeStartComponent } from './reciepe-start/reciepe-start.component';
import { ReciepesComponent } from './reciepes.component';

@NgModule({
    declarations:[
        ReciepesComponent,
        ReciepeDetailComponent,
        ReciepeEditComponent,
        ReciepeItemComponent,
        ReciepeListComponent,
        ReciepeStartComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports:[
        ReciepesComponent,
        ReciepeDetailComponent,
        ReciepeEditComponent,
        ReciepeItemComponent,
        ReciepeListComponent,
        ReciepeStartComponent
    ]
})
export class ReciepesModule{

}