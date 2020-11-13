import { Component, Input, OnInit } from '@angular/core';
import { Reciepe } from '../model/reciepe.model';
import { ReciepeService } from '../services/reciepe.service';

@Component({
  selector: 'app-reciepe-detail',
  templateUrl: './reciepe-detail.component.html',
  styleUrls: ['./reciepe-detail.component.css']
})
export class ReciepeDetailComponent implements OnInit {
  @Input() selectedRecipeDetail : Reciepe;
  constructor(private reciepeService: ReciepeService) { }

  ngOnInit(): void {
  }

}
