import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuardSerive } from '../services/auth-guard.service';
import { ReciepeDetailComponent } from './reciepe-detail/reciepe-detail.component';
import { ReciepeEditComponent } from './reciepe-edit/reciepe-edit.component';
import { ReciepeStartComponent } from './reciepe-start/reciepe-start.component';
import { ReciepesComponent } from './reciepes.component';
import { ReciepeResolverService } from './services/reciepe-resolver.service';

const routes : Route[]=[{
    path : '', 
    component: ReciepesComponent, 
    canActivate:[AuthGuardSerive], 
    children:[{
        path :'',
        component : ReciepeStartComponent
    },{
        path:'new', 
        component:ReciepeEditComponent
    },{
        path:':id', 
        component:ReciepeDetailComponent, 
        resolve : [ReciepeResolverService]
    },{
        path:':id/edit', 
        component:ReciepeEditComponent, 
        resolve : [ReciepeResolverService]
    }
    ]},
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ReciepesRoutingModule {

}