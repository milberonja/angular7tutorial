import { FormUser } from './../form-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-validation',
  templateUrl: './template-driven-form-validation.component.html',
  styleUrls: ['./template-driven-form-validation.component.css']
})
export class TemplateDrivenFormValidationComponent implements OnInit {

  private topics = ['Angular', 'React', 'Vue'];
  private formUser = new FormUser("Milan", "mil@gmail", "06386602", "default", "evening", true);
  private topicHasError = false;

  constructor() { }

  ngOnInit() {
  }

  isExistError(value){
    if(value == 'default'){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

}
