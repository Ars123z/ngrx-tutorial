import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, rename, reset } from '../../shared/store/counter/counter.actions';
import { CounterModel } from '../../shared/store/counter/counter.model';
import { AppStateModel } from '../../shared/store/global/appstate.model';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {
constructor(private store: Store<AppStateModel> ) {}

onIncrement() {
  this.store.dispatch(increment())
}

onDecrement() {
  this.store.dispatch(decrement())
}

onReset() {
  this.store.dispatch(reset())
}

onRename() {
  this.store.dispatch(rename({name: "C.I.D"}))
}
}
