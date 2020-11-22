import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReciepeService } from './reciepes/services/reciepe.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ShoppingService } from './shopping-list/services/shopping.service';

@NgModule({
    providers:[
        ReciepeService, 
        ShoppingService, 
        {
        provide: HTTP_INTERCEPTORS, 
        useClass:AuthInterceptorService,
        multi : true
        }
    ]
})
export class CoreModule{

}