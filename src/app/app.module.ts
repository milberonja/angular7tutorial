import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenFormBindingComponent } from './template-driven-form-binding/template-driven-form-binding.component';
import { TemplateDrivenFormValidationComponent } from './template-driven-form-validation/template-driven-form-validation.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormAndFormBuilderComponent } from './reactive-form-and-form-builder/reactive-form-and-form-builder.component';
import { ReactiveFormAndValidationsComponent } from './reactive-form-and-validations/reactive-form-and-validations.component';
import { BuildingApplicationComponent } from './building-application/building-application.component';



const routs: Routes = [
  {path: "routingComponent", component: RoutingComponent}, 
  {path: "routingAndNavigationComponent", component: RoutingAndNavigationComponent},
  {path: "helloWorldComponent", component: HelloWorldComponent}, 
  {path: "propertyBindingComponent", component: PropertyBindingComponent}, 
  {path: "classBindingComponent", component: ClassBindingComponent}, 
  {path: "twoWayBindingComponent", component: TwoWayBindingComponent}, 
  {path: "templateReferenceVariableComponent", component: TemplateReferenceVariableComponent}, 
  {path: "componentInteraction", component: ComponentInteractionComponent},
  {path: "structuralDirectivesComponent", component: StructuralDirectivesComponent}, 
  {path: "templateDrivenFormComponent", component: TemplateDrivenFormComponent}, 
  {path: "templateDrivenFormComponent", component: TemplateDrivenFormComponent}, 
  {path: "templateDrivenFormBindingComponent", component: TemplateDrivenFormBindingComponent},
  {path: "templateDrivenFormValidationComponent", component: TemplateDrivenFormValidationComponent},
  {path: "reactiveFormsComponent", component: ReactiveFormsComponent},
  {path: "reactiveFormAndFormBuilderComponent", component: ReactiveFormAndFormBuilderComponent},
  {path: "reactiveFormAndValidationsComponent", component: ReactiveFormAndValidationsComponent}, 
  {path: "buildingApplicationComponent", component: BuildingApplicationComponent},
  {
    path: "languages/:id", 
    component: LanguagesComponent,
    children: [
      {path: "overview", component: OverviewComponent},
      {path: "contact", component: ContactComponent},
    ]
  }, 
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
    ContactComponent,
    ComponentInteractionComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormBindingComponent,
    TemplateDrivenFormValidationComponent,
    ReactiveFormsComponent,
    ReactiveFormAndFormBuilderComponent,
    ReactiveFormAndValidationsComponent,
    BuildingApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
