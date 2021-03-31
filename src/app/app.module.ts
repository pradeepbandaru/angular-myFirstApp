import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './pages/demo/demo.component';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { BindingComponent } from './pages/binding/binding.component';
import { WordcountPipe } from './pipes/wordcount.pipe';
import { FormsModule } from '@angular/forms';
import { GlobalService } from './services/global.service';
import { SamplepipePipe } from './pipes/samplepipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BgcolorDirective,
    BindingComponent,
    WordcountPipe,
    SamplepipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
