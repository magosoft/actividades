import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CallsComponent } from './activities/calls/calls.component';
import { EmailsComponent } from './activities/emails/emails.component';
import { MeetingsComponent } from './activities/meetings/meetings.component';
import { VisitsComponent } from './activities/visits/visits.component';
import { WhatsappComponent } from './activities/whatsapp/whatsapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CallsComponent,
    EmailsComponent,
    MeetingsComponent,
    VisitsComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
