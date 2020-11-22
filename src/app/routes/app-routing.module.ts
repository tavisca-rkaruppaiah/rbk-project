import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { LoginComponent } from '../login/login.component';

const routes : Route[] = [
    {path : '', redirectTo:'/reciepes', pathMatch:'full'},
    {path : 'shoppings', component: ShoppingListComponent},
    {path:'login', component:LoginComponent}
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}