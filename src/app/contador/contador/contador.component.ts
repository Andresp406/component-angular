import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `<h1> {{ titulo }}</h1>

    <h3>La base es <strong (click)="acumular(base)">{{ base }}</strong></h3>

    <button (click)="acumular(-base)">{{ base }}</button>
    <span> {{ count }}</span>
    <button (click)="acumular(base)">{{ base }}</button>'
    ` 


})

export class ContadorComponent{
  public titulo: string = 'Ecoterra App';
  public count: number = 2;
  public base: number = 5


  acumular(valor: number){
    this.count += valor;

  }
}