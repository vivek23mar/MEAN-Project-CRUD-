import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, FieldConfig } from '../../models/field.interface';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements Field, OnInit {
  config:FieldConfig;
  group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
