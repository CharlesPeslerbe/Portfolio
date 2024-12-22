import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { OthersComponent } from './pages/others/others.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Chemin par défaut
  { path: 'projects', component: ProjectsComponent }, // Chemin vers la page Projects
  { path: 'about-me', component: AboutMeComponent}, // Chemin vers la page Projects avec un paramètre
  { path: 'others', component: OthersComponent}, // Chemin vers la page AboutMe avec un paramètre
  { path: '**', component: NotFoundComponent }, // Redirige tout chemin invalide vers la page d'accueil
];
