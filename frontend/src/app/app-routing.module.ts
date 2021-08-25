import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatemployeeComponent } from './component/createmployee/createmployee.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DynamicFormComponent } from './dynamicForm/containers/dynamic-form/dynamic-form.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'list',component:ListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'createemploye', component:CreatemployeeComponent},
  {path:'createemploye/:id', component:CreatemployeeComponent},
  {path:'dynamicform',component:DynamicFormComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
