import { Component,Output,EventEmitter, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  query: string = ''; // Variable liée à l'input

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  // Méthode appelée à chaque modification de l'input
  onSearch() {
    this.search.emit(this.query);
  }

  
  // Méthode appelée lorsque l'utilisateur appuie sur Entrée
  onEnter() {
    this.search.emit(this.query); // Émet la requête actuelle
  }

  // Méthode pour effacer la recherche
  clearSearch() {
    this.query = '';
    this.onSearch();
  }
}
