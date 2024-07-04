import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/blog/blog.model';
import { AppStateModel } from '../../shared/store/global/appstate.model';
import { addblog } from '../../shared/store/blog/blog.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent {
  title: string= "";
  description: string= "";
constructor(private store: Store<AppStateModel>, private router: Router) {}

handleSubmit() {
  const blog: BlogModel= {
    title: this.title,
    description: this.description
  }

  this.store.dispatch(addblog({bloginput: blog}))
  this.router.navigate(["/blog"])
}
}
