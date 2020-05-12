import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsSimglePage } from './news-simgle.page';

const routes: Routes = [
  {
    path: '',
    component: NewsSimglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsSimglePageRoutingModule {}
