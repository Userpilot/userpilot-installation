import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardPageComponent } from './containers';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule
  ],
  exports: [],
  providers: []
})
export class DashboardModule { }
