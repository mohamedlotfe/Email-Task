import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap';
import {AppRoutingModule} from './app.routing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';

 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmailCardComponent } from './home-email/email-card.component';
import { HomeEmailComponent } from './home-email/home-email.component';
import { EmailContentComponent } from './home-email/email-content.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeEmailService } from './home-email/home-email.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailCardComponent,
    HomeEmailComponent,
    EmailContentComponent
  ],
  imports: [
    AppRoutingModule,
    ButtonsModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HomeEmailService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
