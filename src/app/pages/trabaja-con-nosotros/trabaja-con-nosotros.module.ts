import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabajaConNosotrosRoutingModule } from './trabaja-con-nosotros-routing.module';
import { TrabajaConNosotrosComponent } from './trabaja-con-nosotros.component';


@NgModule({
  declarations: [
    TrabajaConNosotrosComponent
  ],
  imports: [
    CommonModule,
    TrabajaConNosotrosRoutingModule
  ]
})
export class TrabajaConNosotrosModule { }
