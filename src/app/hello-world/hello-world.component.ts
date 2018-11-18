import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
  <h2 style="text-align:center">
    INTERPOLATION!
  </h2>
  <h3 style="text-align:left">{{2+2}}</h3>
  <h3 style="text-align:left">{{"Welkome " + name}}</h3>
  <h3 style="text-align:left">{{helloInterpolation()}}</h3>
  <h3 style="text-align:left">{{name.length}}</h3>
  <h3 style="text-align:left">{{name.toUpperCase()}}</h3>
  <h3 style="text-align:left">{{siteUrl()}}</h3><br/><hr><br/>
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class HelloWorldComponent implements OnInit {

  name = "interpoloation";

  constructor() { }

  ngOnInit() {
  }

  helloInterpolation(){
    return "Welkome " + this.name + " from method."
  }

  siteUrl(){
    return window.location.href;
  }

}
