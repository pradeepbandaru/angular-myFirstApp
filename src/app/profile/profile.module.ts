import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  id: 'profile',
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
