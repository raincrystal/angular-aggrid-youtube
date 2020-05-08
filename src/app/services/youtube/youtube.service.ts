import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@NgModule({
  imports: [
    HttpClientModule,
  ],
})

export class YoutubeService {
  private apiKey = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';

  constructor(public http: HttpClient) { }
  getSearchList(): Observable<any> {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&maxResults=50&type=video&part=snippet&q=john`;
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }
}
