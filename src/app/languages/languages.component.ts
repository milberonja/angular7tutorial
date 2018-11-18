import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-languages',
  template: `
    <h2>You choosed {{element}}. element and that element is {{name}}</h2><br/><br/>
    <button (click)="previousLanguage()">"Previous"</button> <button (click)="nextLanguage()">"Next"</button> <br/><br/>
    <button (click)="backToPreviousComponent()">Back</button><br/><br/>

    <div style="text-align:center">
      <h3>Example of Relative navigation and Child Routes you can see down, under the Buttons. Just click at buttons and you will see.</h3>
    </div>
    <button (click)="showOverview()">"Overview"</button> <button (click)="showContact()">"contact"</button> <br/><br/>

    <router-outlet></router-outlet>

  `,
  styles: []
})
export class LanguagesComponent implements OnInit {

  public languages = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Java"},
    {"id": 3, "name": "PHP"},
    {"id": 4, "name": "C++"},
    {"id": 5, "name": "Kotlin"},
  ];

  public element; 
  public name;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Example with snapshot that is not useful if we changing the URL and come back at same Component - what we do in this ecample.
    // let id = this.route.snapshot.paramMap.get("id");
    // this.element = parseInt(id);

    // Example with Observable.paramMap that is useful if we changing the URL and come back at same Component - what we do in this ecample.
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.element = parseInt(id);
    });
   
  

    for(let language of this.languages){
      if(language.id == this.element){
        this.name = language.name;
        return true;
      }
    }
  }

  previousLanguage(){
    this.router.navigate(["/languages", this.element - 1]);
  }

  nextLanguage(){
    this.router.navigate(["/languages", this.element + 1]);
  }

  backToPreviousComponent(){
    let selectedElement = this.element ? this.element : null;
    this.router.navigate(['/routingAndNavigationComponent', {id: selectedElement}]);
  }

  showOverview(){
    //Example of relative navigation
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  showContact(){
    //Example of relative navigation
    this.router.navigate(['contact'], {relativeTo: this.route})
  }

}
