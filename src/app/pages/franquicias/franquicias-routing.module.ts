import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranquiciasComponent } from './franquicias.component';

const routes: Routes = [{ path: '', component: FranquiciasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranquiciasRoutingModule { }
