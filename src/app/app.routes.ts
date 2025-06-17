import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NuestroTeComponent } from './pages/nuestro-te/nuestro-te.component';
import { NuestroMenuComponent } from './pages/nuestro-menu/nuestro-menu.component';
import { TutorialesComponent } from './pages/tutoriales/tutoriales.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { FranquiciasComponent } from './pages/franquicias/franquicias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nuestro-te', component: NuestroTeComponent },
  { path: 'nuestro-menu', component: NuestroMenuComponent },
  { path: 'tutoriales', component: TutorialesComponent },
  { path: 'locales', component: LocalesComponent },
  { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent },
  { path: 'franquicias', component: FranquiciasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' }
];
