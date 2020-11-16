import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Reciepe } from '../model/reciepe.model';
import { ReciepeService } from '../services/reciepe.service';

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  selectedRecipeDetail : Reciepe;
  constructor(private recipeService: ReciepeService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      const id = +params["id"];
      this.selectedRecipeDetail = this.recipeService.getReciepe(id);
    });
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipeDetail.ingredients);
  }
}
