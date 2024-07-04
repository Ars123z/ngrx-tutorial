import { Component } from '@angular/core';
import { CustomcounterComponent } from '../customcounter/customcounter.component';
import { CounterbuttonComponent } from '../counterbutton/counterbutton.component';
import { CounterdisplayComponent } from '../counterdisplay/counterdisplay.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CustomcounterComponent, CounterbuttonComponent, CounterdisplayComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}
