import { Routes } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AddblogComponent } from './component/addblog/addblog.component';
import { EditblogComponent } from './component/editblog/editblog.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "counter", component: CounterComponent},
    {path: "blog", component: BlogComponent},
    {path: "addblog", component: AddblogComponent},
    {path: "editblog/:id", component: EditblogComponent},
];
