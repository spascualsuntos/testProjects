import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './modules/app-bootstrap.module';

import { appRouterModule } from './modules/router';
import { ApplicationComponent } from './components/application/application.component';
import { KeyComponent } from './components/key/key.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
