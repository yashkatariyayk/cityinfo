import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CnameComponent } from './cname/cname.component';
import { TechavidusComponent } from './cname/techavidus/techavidus.component';
import { RadixwebComponent } from './cname/radixweb/radixweb.component';

@NgModule({
  declarations: [
    AppComponent,
    CnameComponent,
    TechavidusComponent,
    RadixwebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
