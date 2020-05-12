import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSimglePageRoutingModule } from './news-simgle-routing.module';

import { NewsSimglePage } from './news-simgle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSimglePageRoutingModule
  ],
  declarations: [NewsSimglePage]
})
export class NewsSimglePageModule {}
