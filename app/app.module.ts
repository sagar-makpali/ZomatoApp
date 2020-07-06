import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModuleModule } from '../app/app-routing-module/app-routing-module.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZomatoServiceService } from './zomato-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailViewComponent,
    NotFoundComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,    
    RouterModule.forRoot([])

  ],
  providers: [ZomatoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
