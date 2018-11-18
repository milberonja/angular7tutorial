import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  template: `
  <!-- Template Reference Variable -->

  <h2 style="text-align:center">
    TEMPLATE REFERENCE VARIABLE!
  </h2>
  <input type="text" #inputReference><button (click)="message=inputReference.value">OK</button>{{message}} <br/>
  <input type="text" #inputReference1><button (click)="message1=inputReference1">html tag</button>{{message1}} <br/><hr><br/><br/>
  `,
  styles: []
})
export class TemplateReferenceVariableComponent implements OnInit {

  public message = "";

  constructor() { }

  ngOnInit() {
  }

}
