import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister:FormGroup

  constructor(private fb:FormBuilder, private userSer:UserService) { }

  ngOnInit() {

    this.userRegister=this.fb.group({
      fullName:[''],
      email:[''],
      mobile:[''],
      password:['',Validators.required],
      cpassword:['']
    })

  }


  registerUser(){
    this.userSer.createUser(this.userRegister.value)
    .subscribe(res=>{   })
  }

}
