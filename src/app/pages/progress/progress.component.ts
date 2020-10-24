import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progrese1: number = 25;
  progrese2: number = 55;

  get getProgreso1() {
    return `${this.progrese1}%`
  }

  get getProgreso2() {
    return `${this.progrese2}%`
  }

  cambioValorHijo(valor: number) {
    this.progrese1 = valor;
  }

}
