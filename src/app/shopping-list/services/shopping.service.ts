import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients : Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Orange", 3)
  ];
  ingredientsSubject = new Subject<Ingredient[]>();
  indexSubject = new Subject<number>();
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index : number){
    return this.ingredients.slice()[index];
  }

  addIngredient(ingreadient : Ingredient){
    this.ingredients.push(ingreadient);
    this.emitIngredients();
  }

  addIngredients(ingredients : Ingredient[]){
    this.ingredients.push(...ingredients);
    this.emitIngredients();
  }

  emitIngredients(){
    this.ingredientsSubject.next(this.ingredients.slice());
  }

  updateIngredient(index : number, ingredient : Ingredient){
    this.ingredients[index] = ingredient;
    this.ingredientsSubject.next(this.ingredients.slice());
  }

  deleteIngredient(index : number) {
    this.ingredients.splice(index, 1);
    this.emitIngredients();
  }
}
