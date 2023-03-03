import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementMainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: ':id',
    component: MovementMainComponent
  },
  {
    path: '**',
    redirectTo: '/stock'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementRoutingModule { }
