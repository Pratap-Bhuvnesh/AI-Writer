import { createAction, props } from "@ngrx/store";

export const login = createAction(
    "[User] login auth",
        props<{ email: string; password: string }>()
);

export const loginSuccess  = createAction(
    "[User] login success",
    props<{ token: string; user: any }>()
);

export const loginFailure = createAction(
    "[User] login failure",
     props<{ error: any }>()
)