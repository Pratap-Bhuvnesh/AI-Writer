import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroqserviceService {  
   //token = "10|yZZ4Wi3hNfxPWDaP69MD0o2tKUWxkCxHOFOOVvWj13eb5335"; // or wherever you store it
  url:string = "https://ai-writer-pro.up.railway.app/api/"
  constructor(private http: HttpClient) { }
   groqhistory(): Observable<any[]> {
    /* return this.http.get<any>(this.url, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).pipe(
      map(res => res.data)
    ); */
    return this.http.get<any>(this.url+'history').pipe(
      map(res => res.data)
    );
  }

  generatePrompt(data: { type: string; tone: string; length: string ; prompt: string  }): Observable<any[]> {    
    return this.http.post<any>(this.url+'generate',data);
  }
}
