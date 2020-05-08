import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbSidebarService,
  NbMediaBreakpointsService,
  NbMenuService,
  NbThemeService,
  NbColorHelper,
  NbCardModule,
  NbTabsetModule,
  NbRadioModule,
  NbListModule,
  NbProgressBarModule,
  NbCheckboxModule
} from '@nebular/theme';
import { NbSecurityModule, NbAccessChecker } from '@nebular/security';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { HeaderComponent } from './header/header.component';
import { ThemeModule } from '../theme/theme.module';
import { CoreModule } from '../@core/core.module';
import { AgGridComponent } from './ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AgGridComponent
  ],
  exports: [
    HeaderComponent,
    AgGridComponent,
  ],
  imports: [
    ThemeModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbSecurityModule,
    NbProgressBarModule,
    NbCheckboxModule,
    NbCardModule,
    NbTabsetModule,
    NbRadioModule,
    FormsModule,
    CoreModule,
    NbListModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    NbSidebarService,
    NbMediaBreakpointsService,
    NbMenuService,
    NbThemeService,
    NbAccessChecker,
    NbColorHelper,
    NbCardModule,
  ],
})
export class ComponentsModule { }
