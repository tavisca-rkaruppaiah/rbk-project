import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes : Route[] = [
    {path : '', redirectTo:'/reciepes', pathMatch:'full'}
];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}