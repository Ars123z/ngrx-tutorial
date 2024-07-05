import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

// export const loadblog= createAction("loadblog")
export const LOAD_BLOG= "[blog page] load blog";
export const LOAD_BLOG_SUCCESS= "[blog page] load blog success"
export const LOAD_BLOG_FAIL= "[blog page] load blog fail"
export const ADD_BLOG_SUCCESS= "[blog page] add blog success"
export const ADD_BLOG= "[blog page] add blog"

export const loadblog= createAction(LOAD_BLOG);
export const addblog= createAction('addblog', props<{bloginput: BlogModel}>());
export const updateblog= createAction("updateblog", props<{bloginput: BlogModel}>());
export const deleteblog= createAction("deleteblog", props<{id: (number | undefined)}>())

// Effects Actions

export const loadblogsuccess= createAction(LOAD_BLOG_SUCCESS, props<{bloglist: BlogModel[]}>())

export const loadblogfail= createAction(LOAD_BLOG_FAIL, props<{Errortext: string}>())