    import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    actions$ = inject(Actions);
  http = inject(HttpClient);
  constructor(private router: Router) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) =>
        this.http.post<{ token: string; user: any }>('http://127.0.0.1:8000/api/login', { email, password }).pipe(
          tap((res: any) => {
            // Save token locally
            localStorage.setItem('token', res.token);
            this.router.navigate(['generatecontent']);
          }),
          map(response => AuthActions.loginSuccess({ token: response.token, user: response.user })),
          catchError(error => of(AuthActions.loginFailure({ error: error.message || 'Login failed' })))
        )
      )
    )
  );
}