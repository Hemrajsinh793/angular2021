import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { warningalert } from './warningalert/warningalert.component';
import { successalert } from './successalert/successalert.component';

@NgModule({
  declarations: [
    ServerComponent,
    AppComponent,
    ServersComponent,
    warningalert,
    successalert
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
