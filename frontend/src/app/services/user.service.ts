import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='http://localhost:3000/api/register';
  loginUrl='http://localhost:3000/api/login'


  constructor(private http:HttpClient, private router:Router) { }

  createUser(data){
    console.log(data)
    return this.http.post(this.baseUrl,data)
  }

  login(data){
    console.log(data);
    return this.http.post<any>(this.loginUrl,data).pipe(
      map(res=>{
        if(res && res.accessToken){
          res.accessToken=res.accessToken;
          
          localStorage.setItem('userToken',JSON.stringify(res.accessToken))          

        }
        return res.accessToken;

      })
    )
   
  }
 

}
