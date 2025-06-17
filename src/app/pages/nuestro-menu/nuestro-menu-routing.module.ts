import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestroMenuComponent } from './nuestro-menu.component';

const routes: Routes = [{ path: '', component: NuestroMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuestroMenuRoutingModule { }
