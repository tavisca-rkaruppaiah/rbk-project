import { Component, Input, OnInit } from '@angular/core';
import { Reciepe } from '../../model/reciepe.model';
import { ReciepeService } from '../../services/reciepe.service';

@Component({
  selector: 'app-reciepe-item',
  templateUrl: './reciepe-item.component.html',
  styleUrls: ['./reciepe-item.component.css']
})
export class ReciepeItemComponent implements OnInit {

  @Input() reciepe : Reciepe;
  @Input() index : number;
  constructor(private reciepeService : ReciepeService) { }

  ngOnInit(): void {
  }

  onSelectItem(){
    this.reciepeService.selectedReciepe.emit(this.reciepe);
  }
}
