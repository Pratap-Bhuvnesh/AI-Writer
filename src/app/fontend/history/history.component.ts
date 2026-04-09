import { Component, OnInit } from '@angular/core';
import { GroqserviceService } from '../../services/groqservice.service';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import * as marked from 'marked';

@Component({
  selector: 'app-history',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{  
  apiResult$!: Observable<any[]>;
  constructor(private groq:GroqserviceService){}
  ngOnInit() {
    this.apiResult$ = this.groq.groqhistory().pipe(
        map((res:any[])=>{
          return res.map((item:any) => ({
          ...item, // keep all other fields the same
          response: marked.parse(item.response) // convert Markdown to HTML
        }));
        })
       );    
  }
}
