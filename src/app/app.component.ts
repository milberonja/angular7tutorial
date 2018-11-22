import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular 7 Tutorial';

  public messagefromParent = "Hey I came from Parent!";
  public messageFromChild = "";
  public isHiden = true;

  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      if(location.path() == '/componentInteraction'){
        this.isHiden = false;
      } else{
        this.isHiden = true;
      }
      
    });
  }


 



}
