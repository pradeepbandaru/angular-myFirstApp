import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './pages/demo/demo.component';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { BindingComponent } from './pages/binding/binding.component';
import { WordcountPipe } from './pipes/wordcount.pipe';
import { FormsModule } from '@angular/forms';
import { GlobalService } from './services/global.service';
import { SamplepipePipe } from './pipes/samplepipe.pipe';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { GlobalHttpInterceptorService } from './services/global-http-interceptor.service';
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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GlobalService,
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true  },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
