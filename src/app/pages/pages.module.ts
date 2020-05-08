import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbLayoutModule,
  NbCardModule,
  NbProgressBarModule,
  NbSpinnerModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { ComponentsModule } from '../components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeModule } from '../theme/theme.module';
import { ServiceModule } from '../services/service.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    ComponentsModule,
    ThemeModule.forRoot(),
    ServiceModule.forRoot(),
    NbCardModule,
    NbAlertModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbButtonModule,
    NbCheckboxModule,
    NbInputModule,
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [],
})
export class PagesModule { }
