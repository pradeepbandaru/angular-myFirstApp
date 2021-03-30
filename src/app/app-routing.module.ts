import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './pages/binding/binding.component';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [{path:'demo', component:DemoComponent},
{path:'binding', component:BindingComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
