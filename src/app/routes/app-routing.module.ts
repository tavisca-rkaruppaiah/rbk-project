import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

const routes : Route[] = [
    {path : '', redirectTo:'/reciepes', pathMatch:'full'},
    {
        path:'reciepes', 
        loadChildren: () => import('../reciepes/reciepes.module').then(rec => rec.ReciepesModule)
    },
    {
        path : "shoppings",
        loadChildren : () => import('../shopping-list/shoppings.module').then(s => s.ShoppingsModule)
    },
    {
        path:"login",
        loadChildren : () => import('../login/login.module').then(log => log.LoginModule)
    }
];

@NgModule({
    imports :[RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
    exports:[RouterModule]
})
export class AppRoutingModule {

}