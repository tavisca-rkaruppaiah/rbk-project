import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  indexSubscription : Subscription;
  editMode = false;
  itemIndex :number;
  ingredient : Ingredient;
  @ViewChild('ingredientForm') ingredientForm : NgForm;
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit(): void {
    this.indexSubscription = this.shoppingService.indexSubject.subscribe((index : number)=>{
      this.editMode = true;
      this.itemIndex = index;
      this.ingredient = this.shoppingService.getIngredient(index);
      this.ingredientForm.setValue({
        name : this.ingredient.name,
        amount : this.ingredient.amount
      });
    });
  }

  onSubmit(){
    const ingredient = new Ingredient(this.ingredientForm.value.name, this.ingredientForm.value.amount);
    if(this.editMode){
      this.onUpdateIngredient(ingredient);
    }else{
      this.onAddIngredient(ingredient);
    }
    this.onClear();
  }

  onAddIngredient(ingredient :Ingredient){
    this.shoppingService.addIngredient(ingredient);
  }

  onUpdateIngredient(ingredient : Ingredient){
    this.shoppingService.updateIngredient(this.itemIndex, ingredient);
  }

  onClear(){
    this.editMode = false;
    this.ingredientForm.reset();
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.itemIndex);
    this.onClear();
  }

  ngOnDestroy() : void{
    this.indexSubscription.unsubscribe();
  }
}
