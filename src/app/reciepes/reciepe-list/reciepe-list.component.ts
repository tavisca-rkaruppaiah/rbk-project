import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reciepe } from '../model/reciepe.model';
import { ReciepeService } from '../services/reciepe.service';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {

  reciepes : Reciepe[];

  constructor(private reciepeService : ReciepeService) { }

  ngOnInit(): void {
    this.reciepes = this.reciepeService.getReciepes();
  }
}
