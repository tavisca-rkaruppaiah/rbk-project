import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/model/ingredient.model';
import * as ShoppingListActions from './store/shoppings.action';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  ingredientSubscription : Subscription;
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
     this.store.select('shoppingList').subscribe(state => {
      this.ingredients =state.ingredients;
    });
    //this.ingredientSubscription = this.shoppingService.ingredientsSubject.subscribe((ingredients : Ingredient[])=>{
    //  this.ingredients = ingredients;
    //});
  }

  onEditItem(index : number){
    //this.shoppingService.indexSubject.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy():void{
    //this.ingredientSubscription.unsubscribe();
  }
}
