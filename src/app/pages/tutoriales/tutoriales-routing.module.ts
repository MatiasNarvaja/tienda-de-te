import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialesComponent } from './tutoriales.component';

const routes: Routes = [{ path: '', component: TutorialesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialesRoutingModule { }
