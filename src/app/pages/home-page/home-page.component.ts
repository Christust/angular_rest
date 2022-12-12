import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  name: string = 'Christos';
  constructor() {}

  ngOnInit(): void {}

  // Funcion detonada por el EventEmitter del hijo, event es el valor recibido
  messageEmmiterReceive(event: string) {
    alert(event);
  }
}
