import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterDynamicFormComponent } from './register-dynamic-form/register-dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgDynamicFormModule } from 'ng-json-powered-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    RegisterDynamicFormComponent,
    AppComponent,
  ],
  imports: [
    NgDynamicFormModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [RegisterDynamicFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
