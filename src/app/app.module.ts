import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ReciepeListComponent } from './reciepes/reciepe-list/reciepe-list.component';
import { ReciepeDetailComponent } from './reciepes/reciepe-detail/reciepe-detail.component';
import { ReciepeItemComponent } from './reciepes/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepesComponent,
    ReciepeListComponent,
    ReciepeDetailComponent,
    ReciepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
