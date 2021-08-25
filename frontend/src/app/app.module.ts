import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ListComponent } from './component/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateemployeeService } from './services/createemployee.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatemployeeComponent } from './component/createmployee/createmployee.component';
import { FormInputComponent } from './dynamicForm/components/form-input/form-input.component';
import { FormButtonComponent } from './dynamicForm/components/form-button/form-button.component';
import { FormSelectComponent } from './dynamicForm/components/form-select/form-select.component';
import { DynamicFieldDirective } from './dynamicForm/components/dynamic-field.directive';

import {AuthInterceptor} from './services/auth.interceptor';

import { DynamicFormComponent } from './dynamicForm/containers/dynamic-form/dynamic-form.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    CreatemployeeComponent,
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  exports:[DynamicFormComponent],
  
  providers: [
    AuthGuard,
    CreateemployeeService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent],

  entryComponents:[
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent
  ]
})
export class AppModule { }
