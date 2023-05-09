import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertsComponent } from './page/alerts/alerts.component';
import { HeaderComponent } from './common/header/header.component';
import { ListComponent } from './page/list/list.component';
import { VehicleEditorComponent } from './page/vehicle-editor/vehicle-editor.component';
import { VehicleListComponent } from './common/vehicle-list/vehicle-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    HeaderComponent,
    ListComponent,
    VehicleListComponent,
    VehicleEditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
