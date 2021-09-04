import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import {
  NotificationPageComponent
} from './containers';
import { NotificationRoutingModule } from './notification-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NotificationPageComponent,
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatToolbarModule,
    SharedModule
  ]
})
export class NotificationModule { }
