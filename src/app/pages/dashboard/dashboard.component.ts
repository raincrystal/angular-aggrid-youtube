import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { YoutubeService } from '../../services/youtube/youtube.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  constructor(public youtubeService: YoutubeService) {
  }

  public videos: any[];

  ngOnInit(): void {
    this.videos = [];

    this.youtubeService
      .getSearchList()
      .subscribe(list => {
        for (const element of list.items) {
          this.videos.push(element);
        }
      });
  }
}
