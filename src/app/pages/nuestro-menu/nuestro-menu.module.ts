import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuestroMenuRoutingModule } from './nuestro-menu-routing.module';
import { NuestroMenuComponent } from './nuestro-menu.component';


@NgModule({
  declarations: [
    NuestroMenuComponent
  ],
  imports: [
    CommonModule,
    NuestroMenuRoutingModule
  ]
})
export class NuestroMenuModule { }
