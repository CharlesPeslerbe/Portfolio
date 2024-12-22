import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bento-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bento-box.component.html',
  styleUrls: ['./bento-box.component.css'],
})
export class BentoBoxComponent {
  @Input() title: string = 'Default Title'; // Titre principal
  @Input() subtitle: string = 'Default Subtitle'; // Sous-titre
  @Input() items: Array<{ icon?: string; text?: string; link?: string }> = []; // Contenu
  @Input() background: string = 'var(--primary-color)'; // Style de fond
  @Input() w!: number; // Largeur en pixels
  @Input() h!: number; // Hauteur en pixels
}
