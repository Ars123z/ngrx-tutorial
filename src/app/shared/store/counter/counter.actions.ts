import { createAction, props } from "@ngrx/store";

export const increment = createAction("increment")
export const decrement = createAction("decrement")
export const reset = createAction("rest")
export const customincrement= createAction("customincrement", props<{value: number, action: string}>())
export const rename= createAction("rename", props<{name: string}>())