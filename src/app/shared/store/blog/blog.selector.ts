import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blogs } from "./blog.model";


const getBlogState= createFeatureSelector<Blogs>('blog');

export const getBlog= createSelector(getBlogState, (state)=>{
    return state.bloglist
})