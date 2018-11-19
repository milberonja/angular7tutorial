import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailListComponent } from './employee-detail-list/employee-detail-list.component';
import { EmployeeService } from './services/employee.service';
import { RoutingComponent } from './routing/routing.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingAndNavigationComponent } from './routing-and-navigation/routing-and-navigation.component';
import { LanguagesComponent } from './languages/languages.component';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';



const routs: Routes = [
  {path: "routingComponent", component: RoutingComponent}, 
  {path: "routingAndNavigationComponent", component: RoutingAndNavigationComponent},
  {path: "helloWorldComponent", component: HelloWorldComponent}, 
  {path: "propertyBindingComponent", component: PropertyBindingComponent}, 
  {path: "classBindingComponent", component: ClassBindingComponent}, 
  {path: "twoWayBindingComponent", component: TwoWayBindingComponent}, 
  {path: "templateReferenceVariableComponent", component: TemplateReferenceVariableComponent}, 
  {path: "structuralDirectivesComponent", component: StructuralDirectivesComponent}, 
  {path: "usingServices", component: EmployeeListComponent},
  {
    path: "languages/:id", 
    component: LanguagesComponent,
    children: [
      {path: "overview", component: OverviewComponent},
      {path: "contact", component: ContactComponent},
    ]
  },
  {path: "", component: HelloWorldComponent}, 
  {path: "**", component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StructuralDirectivesComponent,
    EmployeeListComponent,
    EmployeeDetailListComponent,
    RoutingComponent,
    TwoWayBindingComponent,
    TemplateReferenceVariableComponent,
    PageNotFoundComponent,
    RoutingAndNavigationComponent,
    LanguagesComponent,
    OverviewComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
