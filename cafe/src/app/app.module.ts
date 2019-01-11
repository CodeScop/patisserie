import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { PastryService } from './services/pastry.service'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastryComponent } from './pastry/pastry.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PastryComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PastryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
