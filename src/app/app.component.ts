import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavigationBarComponent, RouterOutlet, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'portfolio';

  query: string = ''; // Stocke le mot-clé recherché

  pages = [
    { title: 'Home', content: 'Welcome to the homepage.' },
    { title: 'About', content: 'This page contains information about us.' },
    { title: 'Contact', content: 'Get in touch with us through this page.' },
    { title: 'Services', content: 'We offer web development and design services.' },
    { title: 'Blog', content: 'Read our latest articles and news here.' }
  ];
  filteredPages = [...this.pages]; // Copie initiale des pages

  // Méthode pour filtrer les résultats en fonction des mots-clés
  onSearch(query: string) {
    this.query = query.trim().toLowerCase();
    // Vérifie si les pages existent et sont correctement filtrées
    this.filteredPages = this.pages.filter(page =>
      page.title.toLowerCase().includes(this.query) ||
      page.content.toLowerCase().includes(this.query)
    );
  }
  
}
