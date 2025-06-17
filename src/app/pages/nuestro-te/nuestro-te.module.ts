import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NuestroTeRoutingModule } from './nuestro-te-routing.module';
import { NuestroTeComponent } from './nuestro-te.component';

@NgModule({
  declarations: [
    NuestroTeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NuestroTeRoutingModule
  ]
})
export class NuestroTeModule { }
