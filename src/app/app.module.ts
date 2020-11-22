import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ReciepesModule } from './reciepes/reciepes.module';
import { ShoppingsModule } from './shopping-list/shoppings.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReciepesModule,
    ShoppingsModule,
    SharedModule,
    CoreModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
