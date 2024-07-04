import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/blog/blog.model';
import { getBlog } from '../../shared/store/blog/blog.selector';
import { AppStateModel } from '../../shared/store/global/appstate.model';
import { Router } from '@angular/router';
import { deleteblog } from '../../shared/store/blog/blog.action';




@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogs: BlogModel[];
  constructor(private store: Store<{blog: AppStateModel}>, private router: Router, ) {}

  ngOnInit(): void {
    this.store.select(getBlog).subscribe(value=> {
      this.blogs= value
    })
  }

  onAdd() {
    this.router.navigate(["/addblog"])
  }

  onEdit(value: number| undefined) {
    this.router.navigate(["/editblog", value])
  }

  onDelete(value: number | undefined) {
    this.store.dispatch(deleteblog({id: value}))
  }


}
