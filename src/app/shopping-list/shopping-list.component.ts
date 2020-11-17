import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  ingredientSubscription : Subscription;
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientSubscription = this.shoppingService.ingredientsSubject.subscribe((ingredients : Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy():void{
    this.ingredientSubscription.unsubscribe();
  }
}
