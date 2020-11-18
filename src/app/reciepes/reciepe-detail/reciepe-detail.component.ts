import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reciepe } from '../model/reciepe.model';
import { ReciepeService } from '../services/reciepe.service';

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  selectedRecipeDetail : Reciepe;
  id : number;
  constructor(private recipeService: ReciepeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.id = +params["id"];
      this.selectedRecipeDetail = this.recipeService.getReciepe(this.id);
    });
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipeDetail.ingredients);
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  onDelete(){
    this.recipeService.deleteReciepe(this.id);
    this.router.navigate(['/reciepes']);
  }
}
