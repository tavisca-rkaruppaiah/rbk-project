import { Component, OnInit } from '@angular/core';
import { Reciepe } from './model/reciepe.model';

@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css']
})
export class ReciepesComponent implements OnInit {

  currentSelectedReciepe : Reciepe;
  constructor() { }

  ngOnInit(): void {
  }

}
