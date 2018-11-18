import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  template: `
    <br/><hr><br/>
    <h2 style="text-align:center">
      ROUTING!
    </h2><br/><br/>
    <h2>
      Look setings and imports at app.module.ts and app.component.html!
    </h2>
  `,
  styles: []
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
