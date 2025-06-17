import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NuestroTeComponent } from './pages/nuestro-te/nuestro-te.component';
import { NuestroMenuComponent } from './pages/nuestro-menu/nuestro-menu.component';
import { TutorialesComponent } from './pages/tutoriales/tutoriales.component';
import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { FranquiciasComponent } from './pages/franquicias/franquicias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: NuestroTeComponent },
  { path: 'menu-tienda', component: NuestroMenuComponent },
  { path: 'tutoriales', component: TutorialesComponent },
  { path: 'trabaja-en-tdt', component: TrabajaConNosotrosComponent },
  { path: 'franquicias', component: FranquiciasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' }
];
