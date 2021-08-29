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
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
// Components
import { AppRoutingModule } from './app-routing.module';
import { TabpanelComponent } from './tabpanel/tabpanel.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

registerLocaleData(ru);




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabpanelComponent,
    TableComponent,
    CardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularSvgIconModule.forRoot(), 
    BrowserAnimationsModule,    
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatInputModule,
    NzDatePickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
