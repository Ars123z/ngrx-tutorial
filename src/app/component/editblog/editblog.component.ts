import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppStateModel } from '../../shared/store/global/appstate.model';
import { Store } from '@ngrx/store';
import { getBlog } from '../../shared/store/blog/blog.selector';
import { updateblog } from '../../shared/store/blog/blog.action';
import { BlogModel } from '../../shared/store/blog/blog.model';

@Component({
  selector: 'app-editblog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editblog.component.html',
  styleUrl: './editblog.component.css'
})
export class EditblogComponent implements OnInit{
  id: number;
  title: string;
  description: string;

constructor(private route: ActivatedRoute, private store: Store<AppStateModel>, private router: Router) {}

ngOnInit(): void {
  const idfromurl= (this.route.snapshot.paramMap.get('id') as unknown) as number
  console.log(typeof idfromurl, "idfromurl")
  this.store.select(getBlog).subscribe(value=>{
    this.id= idfromurl
    console.log(typeof this.id)
    this.title= value[this.id - 1].title
    this.description= value[this.id - 1].description
  })

}

handleSubmit() {
  const blog: BlogModel= {
    id: this.id,
    title: this.title,
    description: this.description
  }
  
  this.store.dispatch(updateblog({bloginput: blog}))
  console.log(typeof this.id)
  this.router.navigate(["/blog"])
  console.log("form Submited")
}
}
