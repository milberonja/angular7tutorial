import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-and-navigation',
  template: `
  <h2 style="text-align:center">
    ROUTING AND NAVIGATION!
  </h2>

  <div style="text-align:left">
    <h3>Programming languages</h3>
    <ol>
      <li *ngFor="let language of languages" (click)="onSelect(language)"><button [class.viewedElement]="language.id == numOfId">{{language.name}}</button></li>
    </ol>
  </div>

  <h2 style="text-align:center">
    RELATIVE NAVIGATION AND CHILD ROUTES!
  </h2>
  <div style="text-align:left">
    <h3>To see how is working Relative navigation and Child Routes just click at one of language buttons at the top of the page 
      and specialy look at the changes in the URL bar</h3>
  </div>
  `,
  styles: [`
  .viewedElement {
    background-color: aquamarine;
  }
  `]
})
export class RoutingAndNavigationComponent implements OnInit {

  public languages = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Java"},
    {"id": 3, "name": "PHP"},
    {"id": 4, "name": "C++"},
    {"id": 5, "name": "Kotlin"},
  ];

  public isSelected = false;
  public numOfId;

  constructor(private router: Router, private rout: ActivatedRoute) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.numOfId = parseInt(id);
    })
  }

  onSelect(language){
    this.router.navigate(["/languages", language.id]);
  }

}
