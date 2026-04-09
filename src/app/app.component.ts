import { Component } from '@angular/core';
import { NavigationComponent } from './fontend/header/navigation/navigation.component';
import { FooterComponent } from './fontend/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavigationComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saas';
}
