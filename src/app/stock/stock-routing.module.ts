import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockMainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: StockMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
