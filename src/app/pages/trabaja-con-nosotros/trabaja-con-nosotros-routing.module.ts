import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajaConNosotrosComponent } from './trabaja-con-nosotros.component';

const routes: Routes = [{ path: '', component: TrabajaConNosotrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabajaConNosotrosRoutingModule { }
