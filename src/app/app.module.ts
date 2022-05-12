import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateusersComponent } from './hr/createusers/createusers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HrhomeComponent } from './hr/hrhome/hrhome.component';
import { HomeComponent } from './hr/home/home.component';
import { SearchComponent } from './hr/search/search.component';
import { LoginComponent } from './hr/login/login.component';
import { CardComponent } from './hr/card/card.component';
import { Card11Component } from './card11/card11.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ViewprofieComponent } from './viewprofie/viewprofie.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateusersComponent,
    SidebarComponent,
    TopbarComponent,
    HrhomeComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    CardComponent,
    Card11Component,
    ViewprofieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
