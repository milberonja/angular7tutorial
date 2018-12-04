import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-application',
  template: `
  <br/><br/>
  <h2>Building application</h2>
  <ol>
    <li><b>Comand for building angular app: </b> <i>ng build</i> - After this command it is created dist folder vith files in it.</li>
    <li><b>To integrate Angular with Spring boot - steps/setings</b></li>
    <ul>
      <li>In Command line install next dependencies: <i>npm install --save-dev rimraf</i></li>
      <li>After that in Command line install next dependencies: <i>npm install --save-dev mkdirp</i></li>
      <li>Last installation in Command line would be to install next dependencies: <i>npm install --save-dev copyfiles</i></li>
      <li>Settings in application: in package.json after <i>"build": "ng build"</i> just add <br/>
        <i>"postbuild": "npm run deploy",</i><br/>
        <i>"predeploy": "rimraf ../resources/static/ && mkdirp ../resources/static",</i><br/>
        <i>"deploy": "copyfiles -f dist/** ../resources/static"</i></li>
      <li>After settings in paskage.json in Command line run next command: <i>npm run build</i></li>
      <li>After all of this commands all files from dist folder will be copied into resources/static folder and application 
          can be start from <i>localhost:8080/</i></li>
    </ul>
  </ol>
  `,
  styles: []
})
export class BuildingApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
