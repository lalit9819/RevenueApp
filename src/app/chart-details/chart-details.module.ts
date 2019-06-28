import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartDetailsPage } from './chart-details.page';
import { ReplayComponent } from '../replay/replay.component';

const routes: Routes = [
  {
    path: '',
    component: ChartDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChartDetailsPage, ReplayComponent],
  entryComponents: [ReplayComponent]
})
export class ChartDetailsPageModule {}
