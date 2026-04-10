import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../authStore/auth.actions';
import { Observable } from 'rxjs';
import { selectAuthError, selectUser } from '../../authStore/auth.selectors';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user$: Observable<any>;
  error$: Observable<string | null>;
  constructor(private store:Store){
    this.user$ = this.store.select(selectUser);    
    this.error$ = this.store.select(selectAuthError);
  }

  email = '';
  password = '';  
  submitForm(formvalues:any){
    const { email, password } = formvalues;
    this.store.dispatch(AuthActions.login({ email, password })) 
  }
}
