import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter/counter.actions';
import { CounterModel } from '../../shared/store/counter/counter.model';
import { Subscription } from 'rxjs';
import { getName } from '../../shared/store/counter/counter.selector';
import { AppStateModel } from '../../shared/store/global/appstate.model';

@Component({
  selector: 'app-customcounter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customcounter.component.html',
  styleUrl: './customcounter.component.css'
})
export class CustomcounterComponent implements OnInit, OnDestroy {
constructor(private store: Store<AppStateModel>) {}

value: number= 0;
action: string= "";
name: string= "";
subscription: Subscription;

handleSubmit() {
  this.store.dispatch(customincrement({value: this.value, action: this.action}))
}

ngOnInit(): void {
  this.subscription= this.store.select(getName).subscribe(value=> {
    this.name= value
    console.log("name fired")
  })
}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
