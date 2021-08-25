import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateemployeeService } from 'src/app/services/createemployee.service';

@Component({
  selector: 'app-createmployee',
  templateUrl: './createmployee.component.html',
  styleUrls: ['./createmployee.component.css']
})
export class CreatemployeeComponent implements OnInit {

  empObjectID;
  createEmployee: FormGroup;
  dynamicEdit;
  dynamicFormArray;   //dynamic form array collection from API
  dynamicEmployee: FormGroup //form group instance for Dyanamic form

  constructor(
    private formBuilder: FormBuilder,
    private empSer: CreateemployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
  ) { }
  ngOnInit() {

    this.activatedRoute.params
      .subscribe(ObjID => {
        this.empObjectID = ObjID;
      })

    if (Object.keys(this.empObjectID).length) {
      this.empSer.singleEmp(this.empObjectID).subscribe(res => {
        this.getEmloyeeConfig(res);

      })
    }
    this.getEmloyeeConfig(null);

    //////// calling Json API for dynmic Form
    this.http.get('assets/data.json')
      .subscribe(res => {
        this.dynamicFormArray = res;
        if (Object.keys(this.empObjectID).length) {
          this.empSer.singleEmp(this.empObjectID).subscribe(res => {           
            this.dynamicEdit=res
            this.createDynamicControl(res);
          })
        } else {          
          this.createDynamicControl(this.dynamicEdit={});
        }
      }
      );
    this.dynamicEmployee = this.formBuilder.group({}); // dynamic controll adding
  }

  getEmloyeeConfig(empdata: any = {}) {
    this.createEmployee = this.formBuilder.group({
      empName: [empdata ? empdata.empName : '', Validators.required],
      empDesignation: [empdata ? empdata.empDesignation : ''],
      empAddress: [empdata ? empdata.empAddress : ''],
      empMobile: [empdata ? empdata.empMobile : ''],
      empGender: [empdata ? empdata.empGender : '']
    })
  }


  registerEmployee() {
    this.empSer.createEmployee(this.createEmployee.value)
      .subscribe((res) => { })
    this.router.navigateByUrl('/list')
  }

  updateEmployee() {
    this.empSer.updateEmployee(this.empObjectID.id, this.createEmployee.value)
      .subscribe((res) => { })
    this.router.navigateByUrl('/list')
  }

  createDynamicControl(data: any = {}) {
    this.dynamicFormArray.forEach((element) => {
      this.dynamicEmployee
        .addControl(element.ID, new FormControl(data ? data[element.ID] : '', Validators.required))        
    });   
  }

  dynamicSubmit() {
    console.log(this.dynamicEmployee.value)
    this.empSer.createEmployee(this.dynamicEmployee.value)
      .subscribe((res) => { })
    this.router.navigateByUrl('/list')
  }

  dynamicupdateEmployee() {
    this.empSer.updateEmployee(this.empObjectID.id, this.dynamicEmployee.value)
      .subscribe((res) => { })
    this.router.navigateByUrl('/list')
  }

}