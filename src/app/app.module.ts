import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ReciepeListComponent } from './reciepes/reciepe-list/reciepe-list.component';
import { ReciepeDetailComponent } from './reciepes/reciepe-detail/reciepe-detail.component';
import { ReciepeItemComponent } from './reciepes/reciepe-list/reciepe-item/reciepe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/diectives/dropdown.directive';
import { ReciepeService } from './reciepes/services/reciepe.service';
import { ShoppingService } from './shopping-list/services/shopping.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { ReciepeStartComponent } from './reciepes/reciepe-start/reciepe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepesComponent,
    ReciepeListComponent,
    ReciepeDetailComponent,
    ReciepeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ReciepeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ReciepeService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
