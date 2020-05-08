import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube/youtube.service';
import { Video, VideoRowData } from '../../interface/video.interface';
import { ImageCellComponent } from '../../components/ag-grid/image-cell.component';
import { VideoLinkCellComponent } from '../../components/ag-grid/video-link-cell.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  public videos: Video[] = [];
  public rowData: VideoRowData[] = [];
  public columnDefs: any[] = [];

  public rowSelection = 'multiple';
  public selectMode = false;

  ngOnInit(): void {
    this.videos = [];

    this.youtubeService
      .getSearchList()
      .subscribe(list => {
        for (const element of list.items) {
          this.videos.push(element);
        }
        this.getGridData();
        this.getColumnDefs();
      });
  }

  public getGridData(): void {
    this.rowData = this.videos.map((video) => ({
        image: video.snippet.thumbnails.default.url,
        publishedAt: video.snippet.publishedAt,
        title: video.snippet.title,
        description: video.snippet.description,
        videoId: video.id.videoId
    }));
  }

  public getColumnDefs(): void {
    this.columnDefs = [
      {
        field: 'image',
        headerName: '',
        cellRendererFramework: ImageCellComponent,
        headerCheckboxSelection: this.selectMode,
        headerCheckboxSelectionFilteredOnly: this.selectMode,
        checkboxSelection: this.selectMode
      },
      {field: 'publishedAt', headerName: 'Published on'},
      {field: 'title', headerName: 'Video Title', cellRendererFramework: VideoLinkCellComponent},
      {field: 'description', headerName: 'Description'},
      {field: 'videoId', hide: true}
    ];
  }

  public changeSelectMode(mode): void {
    this.selectMode = mode;
    this.getColumnDefs();
  }
}
