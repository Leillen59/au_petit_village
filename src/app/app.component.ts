import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component.js';
import { FooterComponent } from './components/footer/footer.component.js';
import { HomeComponent } from './Pages/home/home.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            HeaderComponent, 
            FooterComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

}
