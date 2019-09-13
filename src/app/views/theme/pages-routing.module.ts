import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingRoutingModule } from './pages-routing-routing.module';
import { Routes } from '@angular/router';
import { JobsComponent } from '../pages/jobs/jobs.component';

const routes: Routes = [
  {
    path: '', component: JobsComponent, data: {}, children: [
      {
        path: '',
        loadChildren: ''
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingRoutingModule
  ]
})
export class PagesRoutingModule { }
