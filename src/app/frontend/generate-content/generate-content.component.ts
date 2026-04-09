import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GroqserviceService } from '../../services/groqservice.service';
import { Observable } from 'rxjs';
import * as marked from 'marked';

@Component({
  selector: 'app-generate-content',
  imports: [CommonModule,FormsModule],
  templateUrl: './generate-content.component.html',
  styleUrl: './generate-content.component.css'
})
export class GenerateContentComponent {
  //prompResult$! : Observable<any>
  prompResult: any
  constructor(private groqService:GroqserviceService){}

  submitForm(formvalue:any){   
    this.groqService.generatePrompt(formvalue).subscribe({
        next: (res:any) => {
          console.log('Success:', res.data);
          this.prompResult = marked.parse(res.data);
          // save token
        //  localStorage.setItem('token', res.token);
        },
        error: (err) => {
          console.error('Failed:', err);
        }
      });
    //console.log(this.prompResult);
    
  } 
}
