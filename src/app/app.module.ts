import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import {ToastModule} from 'primeng/toast';



import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { TimelineComponent } from './views/timeline/timeline.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './views/shared/header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { PublishComponent } from './views/shared/publish/publish.component';
import { PublicationComponent } from './views/shared/publication/publication.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';

import { httpInterceptorProviders } from './http-interceptors/';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimelineComponent,
    HeaderComponent,
    PublishComponent,
    PublicationComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    ToastModule
  ],
  providers: [
    httpInterceptorProviders, MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
