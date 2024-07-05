import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from '../../shared/store/blog/blog.model';
import { getBlog, getbloginfo } from '../../shared/store/blog/blog.selector';
import { AppStateModel } from '../../shared/store/global/appstate.model';
import { Router } from '@angular/router';
import { deleteblog, loadblog } from '../../shared/store/blog/blog.action';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogs: BlogModel[];
  bloginfo: Blogs
  constructor(private store: Store<{blog: AppStateModel}>, private router: Router, ) {}

  ngOnInit(): void {
    this.store.dispatch(loadblog())
    this.store.select(getbloginfo).subscribe(value=> {
      this.bloginfo= value
      console.log(this.bloginfo.Errormessage)
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
