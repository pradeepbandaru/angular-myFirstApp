import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorhandlingRoutingModule } from './errorhandling-routing.module';
import { ErrorhandlingComponent } from './errorhandling.component';


@NgModule({
  declarations: [ErrorhandlingComponent],
  imports: [
    CommonModule,
    ErrorhandlingRoutingModule
  ]
})
export class ErrorhandlingModule { }
