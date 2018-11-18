import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural-directives',
  template: `
  <h2 style="text-align:center">
    STRUCTURAL DIRECTIVES *ngIf, *ngSwitch and *ngFor!
  </h2>
  <div style="text-align:left" *ngIf="displayMessage; else elseTemplate">
    <h2>Message from *ngIf statement</h2>
  </div>
  <ng-template #elseTemplate>
    <h2>Message from ELSE statement</h2>
  </ng-template>

  <div style="text-align:left" *ngIf="displayMessage1; then thenTemplate; else elseTemplate1">
    <h2>Message from *ngIf statement</h2>
  </div>
  <ng-template #thenTemplate>
    <h2>Message from THEN statement that comes after IF statement</h2>
  </ng-template>
  <ng-template #elseTemplate1>
    <h2>Message from ELSE statement</h2>
  </ng-template>
  `,
  styles: []
})
export class StructuralDirectivesComponent implements OnInit {

  public displayMessage = false;
  public displayMessage1 = true;

  constructor() { }

  ngOnInit() {
  }

}
