import { NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { ReciepesComponent } from '../reciepes/reciepes.component';
import { ReciepeStartComponent } from '../reciepes/reciepe-start/reciepe-start.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ReciepeDetailComponent } from '../reciepes/reciepe-detail/reciepe-detail.component';
import { ReciepeEditComponent } from '../reciepes/reciepe-edit/reciepe-edit.component';

const routes : Route[] = [
    {path : '', redirectTo:'/reciepes', pathMatch:'full'},
    {path : 'reciepes', component: ReciepesComponent, children:[
        {path:'',component:ReciepeStartComponent},
        {path:'new', component:ReciepeEditComponent},
        {path:':id', component:ReciepeDetailComponent},
        {path:':id/edit', component:ReciepeEditComponent}
    ]},
    {path : 'shoppings', component: ShoppingListComponent},
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}