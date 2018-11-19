import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component-interaction',
  template: `
    <br/><br/>
    <h2>Component Interaction</h2>
    <h3>Example of Component interaction - message from Parent component: {{message}}</h3>
    <button (click)="sendingMessage()">Send Message to Parent</button>
    
  `,
  styles: []
})
export class ComponentInteractionComponent {

  @Input('parentData') message;
  @Output() childEmiter = new EventEmitter();
  
  sendingMessage(){
    console.log('Radi');
    this.childEmiter.emit('Hey I came from Child component');
  }

}