import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter/counter.model';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../../shared/store/counter/counter.selector';
import { AppStateModel } from '../../shared/store/global/appstate.model';


@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css'
})
export class CounterdisplayComponent implements OnInit, OnDestroy
{
  constructor(private store: Store<AppStateModel>) {}
  counter: number= 0;
  subscription: Subscription;
 

  ngOnInit() {
    this.subscription= this.store.select(getCounter).subscribe(value=>{
      this.counter= value
      console.log("counter fired")
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  
}
