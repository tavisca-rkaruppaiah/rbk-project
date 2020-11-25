import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { KeyStore } from 'src/app/keystore';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { Reciepe } from '../model/reciepe.model';
import * as ShoppingListActions from '../../shopping-list/store/shoppings.action';
import * as fromApp from '../../store/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
  private reciepes1 : Reciepe[] = [
    new Reciepe(
      'Parotta',
      'this is called as Parotta',
      KeyStore.parottaImage, [
        new Ingredient('apple', 2),
        new Ingredient('banana', 1)
      ]
    ),
    new Reciepe(
      'Dosa',
      'this is called as Dosa',
      KeyStore.dosaImage, [
        new Ingredient('banana', 2),
        new Ingredient('orange', 1)
      ]
    )
  ];

  private reciepes : Reciepe[] = [];
  reciepeChangedSubject = new Subject<Reciepe[]>();
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  setReciepes(reciepes : Reciepe[]){
    this.reciepes = reciepes;
    this.notifyReciepeChanged();
  }

  getReciepes(){
    return this.reciepes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    //this.shoppingService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  getReciepe(id : number){
    return this.reciepes.slice()[id];
  }

  addReciepe(reciepe : Reciepe){
    this.reciepes.push(reciepe);
    this.notifyReciepeChanged();
  }

  updateReciepe(index : number, reciepe:Reciepe){
    this.reciepes[index] = reciepe;
    this.notifyReciepeChanged();
  }

  notifyReciepeChanged(){
    this.reciepeChangedSubject.next(this.reciepes.slice());
  }

  deleteReciepe(index : number){
    this.reciepes.splice(index, 1);
    this.notifyReciepeChanged();
  }
}
