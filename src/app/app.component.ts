import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, NavigationBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'portfolio';
}
