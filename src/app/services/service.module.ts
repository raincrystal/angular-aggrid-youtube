import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeService } from './youtube/youtube.service';

const SERVICES = [
  YoutubeService,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ...SERVICES,
  ],
})

export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        ...SERVICES,
      ],
    } as ModuleWithProviders;
  }
}
