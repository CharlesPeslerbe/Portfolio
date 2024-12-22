import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BentoBoxComponent } from '../../bento-box/bento-box.component';

@Component({
  selector: 'app-home',
  imports: [ BentoBoxComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bentoBoxes = [
    {
      title: 'About Me',
      subtitle: 'Learn more about my background',
      background: 'var(--primary-color)',
      items: [
        { icon: 'assets/images/Avatar.png', text: 'Me', link: '/profile' }
        
      ],
      w: 400,
      h: 400
    },
    {      
      title: 'My Formation',
      subtitle: 'My academic background',
      background: 'var(--primary-color)',
      items: [
        { icon: 'assets/images/Ensim_logo.png', text: 'School', link: 'https://ensim.univ-lemans.fr/fr/index.html' },
        { icon: 'assets/icons/CS_Icon.png', text: 'Computer science engineering', link: 'https://ensim.univ-lemans.fr/fr/nos-formations/nos-formations/informatique.html' },
        { icon: '', text: 'HCI' , link : 'https://ensim.univ-lemans.fr/fr/nos-formations/nos-formations/informatique/option-interaction-personnes-systemes.html'}
      ],// Human Computer Interaction
      w: 848,
      h: 400
    },
    {
      title: 'Contact Me',
      subtitle: 'How to reach me',
      background: 'var(--primary-color)',
      items: [
        { icon: 'assets/icons/Linkedin_Icon.png', text: 'LinkedIn', link: 'https://www.linkedin.com/in/charlespeslerbe/' },
        { icon: 'assets/icons/Github_Icon.png', text: 'My GitHub', link: 'https://github.com/CharlesPeslerbe'},
        { icon: 'assets/icons/Mail_Icon.png', text: 'charlespeslerbe.pro@gmail.com', link: '/' }
        
      ],
      w: 400,
      h: 400
    },
    {
      title: 'About Me',
      subtitle: 'Learn more about my background',
      background: 'var(--primary-color)',
      items: [
        { icon: 'assets/images/Avatar.png', text: 'Me', link: '/profile' }
        
      ],
      w: 400,
      h: 400
    },
    {
      title: 'My Skills',
      subtitle: 'Technical Expertise',
      background: 'var(--primary-color)',
      items: [
        { icon: 'assets/icons/Java_Icon.png', text: 'Java', link: '/about-me' },
        { icon: 'assets/images/unity_unreal.png', text: 'Unity & Unreal Engine', link: '/about-me' }, // Enlever le background de l'image
        { icon: 'assets/icons/Figma_Icon.png', text: 'Figma', link: '/about-me' },
        { icon: 'assets/icons/Flutter_Icon.jpeg', text: 'Flutter', link: '/about-me' } // Enlever le fond
      ],
      w: 400,
      h: 848
    },
    {
      title: 'Contact Me',
      subtitle: 'How to reach me',
      background: 'var(--primary-color)',
      items: [
        { icon: 'assets/icons/Linkedin_Icon.png', text: 'LinkedIn', link: 'https://www.linkedin.com/in/charlespeslerbe/' },
        { icon: 'assets/icons/Github_Icon.png', text: 'My GitHub', link: 'https://github.com/CharlesPeslerbe'},
        { icon: 'assets/icons/Mail_Icon.png', text: 'charlespeslerbe.pro@gmail.com', link: '/' }
        
      ],
      w: 848,
      h: 848
    },
    {
      title: 'About Me',
      subtitle: 'Learn more about my background',
      background: 'var(--primary-color)',
      items: [
        { icon: 'assets/images/Avatar.png', text: 'Me', link: '/profile' }
        
      ],
      w: 400,
      h: 400
    }
  ];


  getBentoBoxClass(box: { w: number; h: number }): string {
    const classes = [];
    if (box.w === 848) classes.push('wide'); // 2 colonnes
    if (box.h === 848) classes.push('tall'); // 2 lignes
    if (box.w === 848 && box.h === 848) classes.push('large'); // 2 colonnes et 2 lignes
    return classes.join(' ');
  }
  

}
