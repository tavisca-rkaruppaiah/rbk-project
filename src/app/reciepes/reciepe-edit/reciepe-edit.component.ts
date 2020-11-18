import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Reciepe } from '../model/reciepe.model';
import { ReciepeService } from '../services/reciepe.service';

@Component({
  selector: 'app-reciepe-edit',
  templateUrl: './reciepe-edit.component.html',
  styleUrls: ['./reciepe-edit.component.css']
})
export class ReciepeEditComponent implements OnInit {

  id:number;
  editMode = false;
  reciepeForm : FormGroup;
  constructor(private route : ActivatedRoute, private reciepeService : ReciepeService, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) =>{
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.initializeForm();
    });
  }

  onSubmit(){
    const reciepe = this.reciepeForm.value;
    if(this.editMode){
      this.reciepeService.updateReciepe(this.id, reciepe);
    }else{
      this.reciepeService.addReciepe(reciepe);
    }
    this.onDiscard();
  }

  get getIngredientControls() {
    return (<FormArray>this.reciepeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.reciepeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null, Validators.required),
        'amount':new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index : number){
    (<FormArray>this.reciepeForm.get('ingredients')).removeAt(index);
  }

  onDiscard(){
    this.router.navigate(['../'], {relativeTo:this.route});
  }

  private initializeForm(){
    let reciepeInit : Reciepe = new Reciepe('','','',[]);
    let reciepeIngredients = new FormArray([]);
    if(this.editMode){
      const reciepe = this.reciepeService.getReciepe(this.id);
      reciepeInit = reciepe;
      if(reciepe['ingredients']){
        for(let ingredient of reciepe.ingredients){
          reciepeIngredients.push(new FormGroup({
            'name':new FormControl(ingredient.name, Validators.required),
            'amount' : new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        }
      }
    }
    this.reciepeForm = new FormGroup({
      'name':new FormControl(reciepeInit.name, Validators.required),
      'imagePath':new FormControl(reciepeInit.imagePath, Validators.required),
      'description':new FormControl(reciepeInit.description, Validators.required),
      'ingredients':reciepeIngredients
    });
  }
}
