import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestroTeComponent } from './nuestro-te.component';

const routes: Routes = [
  { path: '', component: NuestroTeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuestroTeRoutingModule { }
