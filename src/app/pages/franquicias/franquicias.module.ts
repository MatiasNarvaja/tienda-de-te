import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranquiciasRoutingModule } from './franquicias-routing.module';
import { FranquiciasComponent } from './franquicias.component';


@NgModule({
  declarations: [
    FranquiciasComponent
  ],
  imports: [
    CommonModule,
    FranquiciasRoutingModule
  ]
})
export class FranquiciasModule { }
