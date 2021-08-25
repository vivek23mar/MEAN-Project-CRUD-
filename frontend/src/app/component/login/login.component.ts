import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private formBuilder:FormBuilder, private ser:UserService, private route:Router) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.ser.login(this.loginForm.value)
    .subscribe()
    this.route.navigateByUrl('/')    
  }

}
