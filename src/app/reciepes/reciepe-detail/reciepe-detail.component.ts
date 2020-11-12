import { Component, Input, OnInit } from '@angular/core';
import { Reciepe } from '../model/reciepe.model';

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  @Input() selectedRecipeDetail : Reciepe;
  constructor() { }

  ngOnInit(): void {
  }

}
