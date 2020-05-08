import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
})

export class YoutubeService {
  apiKey = 'YOUTUBE-API-KEY';

  constructor(public http: HttpClient) { }

}
