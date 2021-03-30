import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './pages/demo/demo.component';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { BindingComponent } from './pages/binding/binding.component';
import { WordcountPipe } from './pipes/wordcount.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BgcolorDirective,
    BindingComponent,
    WordcountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
