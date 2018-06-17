import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ItemSearchComponent } from './item-search/item-search.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: ItemSearchComponent },
  { path: 'detail/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
