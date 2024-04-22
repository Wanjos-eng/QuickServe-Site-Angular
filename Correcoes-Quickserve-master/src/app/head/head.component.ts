import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent implements OnInit {

  activeLink: string = ''; // Propriedade para rastrear o link ativo
  // Método para definir o link ativo
  setActiveLink(link: string) {
    this.activeLink = link;
  }
  constructor(){}
  ngOnInit(){

  }

}
