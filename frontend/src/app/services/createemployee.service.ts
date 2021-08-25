import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateemployeeService {

 
  baseUrl = 'http://localhost:3000/employee';


  constructor(private http:HttpClient) { }

  createEmployee(data){    
    return this.http.post(this.baseUrl,data)
  }
  
  getEmployee(){
    return this.http.get(this.baseUrl)
  }

  deleteEmployee(_id){
    return this.http.delete(this.baseUrl+`/${_id}`);
  }

  updateEmployee(id,data){

    return this.http.put(`${this.baseUrl}/${id}`,data);    

  }

  singleEmp(id){    
    return this.http.get(this.baseUrl+`/${id.id}`)
  }

  singleEmpDynamic(id){    
    return this.http.get(this.baseUrl+`/${id}`)
  }

  
}
