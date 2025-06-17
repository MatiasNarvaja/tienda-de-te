import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuestroCafeComponent } from './nuestro-cafe.component';

const routes: Routes = [{ path: '', component: NuestroCafeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuestroCafeRoutingModule { }
