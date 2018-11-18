import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-wey-binding',
  template: `
  <!-- TWO WAY BINDING -->
  
  <h2 style="text-align:center">
    TWO WAY BINDING!
  </h2>

  <input type="text" [(ngModel)]="name">{{name}} <br/><br/><hr><br/><br/>
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  public name = "Kucaj tekst u input tag";

  constructor() { }

  ngOnInit() {
  }

}
