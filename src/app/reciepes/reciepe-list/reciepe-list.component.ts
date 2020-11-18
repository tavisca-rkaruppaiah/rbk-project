import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reciepe } from '../model/reciepe.model';
import { ReciepeService } from '../services/reciepe.service';

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit, OnDestroy {

  reciepes : Reciepe[];
  reciepeChangedSubscription : Subscription;

  constructor(private reciepeService : ReciepeService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reciepes = this.reciepeService.getReciepes();
    this.reciepeChangedSubscription = this.reciepeService.reciepeChangedSubject.subscribe((reciepes : Reciepe[])=>{
      this.reciepes = reciepes;
    });
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  ngOnDestroy(){
    this.reciepeChangedSubscription.unsubscribe();
  }
}
