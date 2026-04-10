import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface registerUser{
  name:string,
  email:string,
  password:string
}

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private regService:RegisterService,private router: Router){}
    error: Record<string, string[]> = {};
    statusColour:string  = ""
    successMessage: string = '';
    email = '';
    password = '';  
    submitForm(formvalues:registerUser){
      console.log(formvalues);    
    this.regService.registerUser(formvalues).subscribe({
      next: (res: any) => {
        this.statusColour ="green"
        localStorage.setItem('token',res.token)
        this.successMessage = 'Registration successful!';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000); // 5000ms = 5 seconds                
      },
      error: (err) => {
       this.error = err.error.errors;
       console.log(this.error);
       
       this.statusColour ="red"
      }
    });
    }
}
