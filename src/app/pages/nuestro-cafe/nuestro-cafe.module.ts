import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuestroCafeRoutingModule } from './nuestro-cafe-routing.module';
import { NuestroCafeComponent } from './nuestro-cafe.component';


@NgModule({
  declarations: [
    NuestroCafeComponent
  ],
  imports: [
    CommonModule,
    NuestroCafeRoutingModule
  ]
})
export class NuestroCafeModule { }
