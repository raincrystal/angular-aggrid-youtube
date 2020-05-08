import {Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }
}
