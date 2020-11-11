import { Component, OnInit } from '@angular/core';
import { Reciepe } from '../model/reciepe.model';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {

  reciepes : Reciepe[] = [
    new Reciepe('Parotta','this is called as Parotta','https://img-global.cpcdn.com/recipes/0aec6ae93db733e8/1200x630cq70/photo.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
