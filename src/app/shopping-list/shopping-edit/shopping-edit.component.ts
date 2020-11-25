import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import * as ShoppingListActions from '../store/shoppings.action';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

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
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.indexSubscription = this.store
    .select('shoppingList')
    .subscribe(stateData => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.ingredient = stateData.editedIngredient;
        this.ingredientForm.setValue({
          name: this.ingredient.name,
          amount: this.ingredient.amount
        });
      } else {
        this.editMode = false;
      }
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
    //this.shoppingService.addIngredient(ingredient);
    this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
  }

  onUpdateIngredient(ingredient : Ingredient){
    //this.shoppingService.updateIngredient(this.itemIndex, ingredient);
    this.store.dispatch(
      new ShoppingListActions.UpdateIngredient(ingredient)
    );
  }

  onClear(){
    this.editMode = false;
    this.ingredientForm.reset();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete(){
    //this.shoppingService.deleteIngredient(this.itemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy() : void{
    this.indexSubscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
