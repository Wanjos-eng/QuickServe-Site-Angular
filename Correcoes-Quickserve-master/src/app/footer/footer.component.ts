import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Corrected property name and added square brackets
})
export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
