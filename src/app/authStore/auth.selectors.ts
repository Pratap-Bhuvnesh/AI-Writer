import { createSelector, createFeatureSelector } from '@ngrx/store';
import { authState } from './auth.reducer';

export const selectAuth = createFeatureSelector<authState>('auth');

export const selectUser = createSelector(
  selectAuth,
  (state: authState) => state.user
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: authState) => state.error
);