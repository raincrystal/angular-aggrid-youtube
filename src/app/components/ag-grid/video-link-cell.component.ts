import { Component } from '@angular/core';

@Component({
  selector: 'app-image-formatter-cell',
  template: `
    <a
      style="text-decoration: none"
      target="_blank"
      rel="noopener noreferrer"
      href=\"https://www.youtube.com/watch?v={{ params.data.videoId }}\"
    >
    {{params.value}}
    </a>
  `
})

export class VideoLinkCellComponent {
  public params: any;

  agInit(params: any) {
    this.params = params;
  }
}
