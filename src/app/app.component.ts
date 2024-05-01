import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  content = 'Welcome do QuickServe App!';

  constructor() {
    console.log('Tou aqui', environment.api)
  }

  ngOnInit() {
  }
}
