import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialesRoutingModule } from './tutoriales-routing.module';
import { TutorialesComponent } from './tutoriales.component';


@NgModule({
  declarations: [
    TutorialesComponent
  ],
  imports: [
    CommonModule,
    TutorialesRoutingModule
  ]
})
export class TutorialesModule { }
