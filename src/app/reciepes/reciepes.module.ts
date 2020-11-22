import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ReciepeDetailComponent } from './reciepe-detail/reciepe-detail.component';
import { ReciepeEditComponent } from './reciepe-edit/reciepe-edit.component';
import { ReciepeItemComponent } from './reciepe-list/reciepe-item/reciepe-item.component';
import { ReciepeListComponent } from './reciepe-list/reciepe-list.component';
import { ReciepeStartComponent } from './reciepe-start/reciepe-start.component';
import { ReciepesRoutingModule } from './reciepes-routing.module';
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
        ReactiveFormsModule,
        ReciepesRoutingModule,
        SharedModule
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