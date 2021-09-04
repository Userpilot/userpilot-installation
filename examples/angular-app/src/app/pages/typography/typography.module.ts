import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { TypographyPageComponent } from './containers';
import { TypographyRoutingModule } from './typography-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TypographyPageComponent],
  imports: [
    CommonModule,
    TypographyRoutingModule,
    MatToolbarModule,
    SharedModule
  ]
})
export class TypographyModule { }
