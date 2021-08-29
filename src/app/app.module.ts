import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material Module
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
// Components
import { AppRoutingModule } from './app-routing.module';
import { TabpanelComponent } from './tabpanel/tabpanel.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabpanelComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularSvgIconModule.forRoot(), BrowserAnimationsModule,    
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
