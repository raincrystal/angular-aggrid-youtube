import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nebular';
  user = {
    name: localStorage.getItem('name'),
    picture: '/assets/user.jpg'
  };
  constructor(private router: Router) {
  }


  ngOnInit() {
  }
}
