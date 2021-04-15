import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorhandlingComponent } from './errorhandling.component';

const routes: Routes = [{ path: '', component: ErrorhandlingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorhandlingRoutingModule { }
