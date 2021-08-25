import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, FieldConfig } from '../../models/field.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements Field, OnInit{
  
  config:FieldConfig;
  group:FormGroup;
  fieldDataOnEdit;

  constructor() {   }

  ngOnInit(){

  
    
  }

}
