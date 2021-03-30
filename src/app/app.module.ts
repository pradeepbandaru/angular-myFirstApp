import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './pages/demo/demo.component';
import { BgcolorDirective } from './directives/bgcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BgcolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
