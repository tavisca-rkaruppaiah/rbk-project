import { EventEmitter, Injectable } from '@angular/core';
import { KeyStore } from 'src/app/keystore';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/services/shopping.service';
import { Reciepe } from '../model/reciepe.model';

@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
  private reciepes : Reciepe[] = [
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
  constructor(private shoppingService : ShoppingService) { }

  getReciepes(){
    return this.reciepes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

  getReciepe(id : number){
    return this.reciepes.slice()[id];
  }
}
