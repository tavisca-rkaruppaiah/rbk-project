import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameRef : ElementRef;
  @ViewChild("amountInput") amountRef : ElementRef;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const newIngredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.shoppingService.addIngredient(newIngredient);
  }

}
