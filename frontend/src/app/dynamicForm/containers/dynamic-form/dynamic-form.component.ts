import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CreateemployeeService } from 'src/app/services/createemployee.service';


import { FieldConfig } from '../../models/field.interface';

@Component({
  exportAs:'dynamicForm',
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  //crud operation in dynamic form
  allEmpRecord;
  editFunction;


  //setup to dynamic form genreate
  empConfig :any=[];

  @Input()
  config:FieldConfig[]=[];
  form:FormGroup;

  constructor(
    private fb:FormBuilder, 
    private http:HttpClient,
    private ser : CreateemployeeService
  ) { }

  ngOnInit() {
    // creating control and geting data from json and binding with HTML
    this.http.get("assets/form.json")
    .subscribe((res:any) =>{
      this.empConfig=res.fields;
      this.form=this.createControl(null);
    });
    this.form=this.fb.group({});

    // geting all employee list at PAGE LOAD time
    this.getAllEmployee();

  }

  //creating dynamic control using JSON data
  createControl(data){
    
    const group = this.fb.group({});
    this.empConfig.forEach(control=>{   
      group.addControl(control.fieldName,new FormControl(data?data[control.fieldName]:''))});             
    return group;
  }

  onSubmit(){
    this.ser.createEmployee(this.form.value)
    .subscribe();
    this.ngOnInit();
  }

  getAllEmployee(){
    this.ser.getEmployee()
    .subscribe(res=>{
      this.allEmpRecord=res
    })    
  }

  onDelete(id){
    this.ser.deleteEmployee(id)
    .subscribe(res=>{});
    this.ngOnInit();
  }

  onEdit(id){
    this.ser.singleEmpDynamic(id)
    .subscribe(res=>{
      this.editFunction=res;
      this.form=this.createControl(this.editFunction);
    });
  
    
  }

  

}
