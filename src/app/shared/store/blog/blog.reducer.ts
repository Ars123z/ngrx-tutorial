import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./blog.state";
import { addblog, deleteblog, loadblog, updateblog } from "./blog.action";

export const blogReducer= createReducer(
    BlogState,
    on(loadblog, (state)=> {
        return {
            ...state
        }
    }),
    on(addblog, (state, action)=> {
        return {
            ...state,
            bloglist: [...state.bloglist, {...action.bloginput, id: state.bloglist.length + 1}]

        }
    }),
    on(updateblog, (state, action) => {
        const _blog= {...action.bloginput}
        console.log(_blog)
        const updatedBlogList = state.bloglist.map(blog => {
            console.log(typeof _blog.id, typeof blog.id)
          return _blog.id == blog.id ? _blog : blog;
        });
        console.log(updatedBlogList)
      
        return {
          ...state,
          bloglist: updatedBlogList,
        }
      }),
      on(deleteblog, (state, action) => {
        const updatedBloglist = state.bloglist.filter(blog => blog.id !== action.id);
      
        return {
          ...state,
          bloglist: updatedBloglist,
        };
      })
    )