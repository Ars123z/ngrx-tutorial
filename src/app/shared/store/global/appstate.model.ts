import { Blogs } from "../blog/blog.model";
import { CounterModel } from "../counter/counter.model";

export interface AppStateModel {
    counter: CounterModel,
    blog: Blogs
}