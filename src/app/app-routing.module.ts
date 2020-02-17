import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyLoadingComponent } from './lazy-loading.component';


const routes: Routes = [
  {
    path: 'lazy-foo',
    component: LazyLoadingComponent,
  },
  {
    path: 'lazy-bar',
    component: LazyLoadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
