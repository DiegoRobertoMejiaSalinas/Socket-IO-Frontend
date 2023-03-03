import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'stock',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => m.StockModule),
  },
  {
    path: 'movement',
    loadChildren: () =>
      import('./movement/movement.module').then((m) => m.MovementModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stock',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
