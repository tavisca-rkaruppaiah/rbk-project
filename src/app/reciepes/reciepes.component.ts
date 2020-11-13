import { Component, OnInit } from '@angular/core';
import { Reciepe } from './model/reciepe.model';
import { ReciepeService } from './services/reciepe.service';

@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  styleUrls: ['./reciepes.component.css']
})
export class ReciepesComponent implements OnInit {

  currentSelectedReciepe : Reciepe;
  constructor(private reciepeService: ReciepeService) { }

  ngOnInit(): void {
    this.reciepeService.selectedReciepe.subscribe((reciepe : Reciepe)=>{
      this.currentSelectedReciepe = reciepe;
      console.log(reciepe);
    });
  }

}
