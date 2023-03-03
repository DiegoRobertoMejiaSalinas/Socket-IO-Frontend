import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockMainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    StockMainComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
