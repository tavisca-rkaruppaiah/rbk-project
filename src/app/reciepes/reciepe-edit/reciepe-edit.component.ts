import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reciepe-edit',
  templateUrl: './reciepe-edit.component.html',
  styleUrls: ['./reciepe-edit.component.css']
})
export class ReciepeEditComponent implements OnInit {

  id:number;
  editMode = false;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params) =>{
      this.id = +params["id"];
      this.editMode = +params["id"] != null;
    });
  }

}
