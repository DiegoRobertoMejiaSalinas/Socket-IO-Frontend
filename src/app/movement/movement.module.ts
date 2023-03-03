import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementRoutingModule } from './movement-routing.module';
import { MovementMainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MovementMainComponent
  ],
  imports: [
    CommonModule,
    MovementRoutingModule
  ]
})
export class MovementModule { }
