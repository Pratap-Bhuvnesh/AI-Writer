import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerUser } from '../fontend/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "https://ai-writer-pro.up.railway.app/api/"
  constructor(private http:HttpClient) { }

  registerUser(userdata:registerUser){
     const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.post(this.url+"register",userdata, { headers })
  }
}
