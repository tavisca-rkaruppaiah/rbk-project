import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/diectives/dropdown.directive';
import { ReciepeService } from './reciepes/services/reciepe.service';
import { ShoppingService } from './shopping-list/services/shopping.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from '../app/services/auth-interceptor.service';
import { ReciepesModule } from './reciepes/reciepes.module';
import { ShoppingsModule } from './shopping-list/shoppings.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    DropdownDirective,
    LoginComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReciepesModule,
    ShoppingsModule
  ],
  providers: [
    ReciepeService, 
    ShoppingService, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass:AuthInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
