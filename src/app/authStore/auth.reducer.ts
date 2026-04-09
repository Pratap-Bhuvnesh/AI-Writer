import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";

export interface authState{
    token: string | null;
    user: any | null;
    error: string | null;
}

export const initialState:authState = {
    token: null,
    user:null,
    error:null,
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { token, user }) => ({
        ...state,
        token,
        user,
        error: null,
    })),
   on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        error,
  }))
)