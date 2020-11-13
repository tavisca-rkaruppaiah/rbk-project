import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingedientsEmitter.subscribe((ingredients : Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }
}
