import { blogReducer } from "../blog/blog.reducer";
import { counterReducer } from "../counter/counter.reducers";

export const AppState= {
    counter: counterReducer,
    blog: blogReducer
}