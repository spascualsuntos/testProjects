import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './modules/app-bootstrap.module';

import { appRouterModule } from './app.routes';
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
    AppBootstrapModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
