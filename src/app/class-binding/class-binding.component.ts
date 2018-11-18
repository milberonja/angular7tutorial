import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-binding',
  template: `
  <h2 style="text-align:center">
    CLASS, STYLE AND EVENT BINDING!
  </h2>
  <h2 style="text-align:left" class="text-success">Simply example</h2>
  <h2 style="text-align:left" [class]="successClass">Simply example of class binding</h2>
  <h2 style="text-align:left" [class.text-special]="isSpecial">Binding special class by property</h2>
  <h2 style="text-align:left" [class.text-denger]="isError">Binding special class by property</h2>
  <h2 style="text-align:left" [ngClass]="objectBinding">Binding multiple classes by object property</h2><br/>

  <!-- Style binding -->

  <h2 style="text-align:left" [style.color]="'red'">Simply example of style binding</h2>
  <h2 style="text-align:left" [style.color]="isRed ? 'red' : 'blue'">Simply example of style binding</h2>
  <h2 style="text-align:left" [ngStyle]="styleObject">Simply example of style binding</h2><br/>

  <!-- Event binding -->

  <button (click)="welkomeMessage()">Welkome</button>{{welkomeMess1}}<br/>
  <button (click)="bindingByEvent($event)">Using $event event</button>{{welkomeMess2}}<br/>
  <button (click)="welkomeMess3='Welkome from click event inline of html tag'">Welkome</button>{{welkomeMess3}}<br/><hr><br/><br/>

  `,
  styles: [`
    .text-success {
vhmk    }
    .text-denger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {

  public successClass = "text-success";
  public isError = true;
  public isSpecial = false;
  public objectBinding = {
    "text-denger": this.isError,
    "text-success": false,
    "text-special": !this.isSpecial
  }

  public isRed = false;
  public styleObject = {
    "color": "orange",
    "fontStyle": "italic"
  }

  public welkomeMess1 = "";
  public welkomeMess2 = "";
  public welkomeMess3 = "";
  public xCoordinate = "";
  public yCoordinate = "";

  welkomeMessage(){
    console.log("Welkome message");
    this.welkomeMess1 = "Welkome to event binding!";
  }

  bindingByEvent(event){
    console.log("Welkome to event binding by event!");
    console.log(event);
    this.xCoordinate = event.x;
    this.yCoordinate = event.y;
    this.welkomeMess2 = "Welkome to " + event.type + " event. You clicked button on x: " + this.xCoordinate + " and y: " + this.yCoordinate;
  }

  

  constructor() { }

  ngOnInit() {
  }

}
