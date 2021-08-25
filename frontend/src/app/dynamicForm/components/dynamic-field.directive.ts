import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, FieldConfig } from '../models/field.interface';

import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';

const componentMapper={
  button:FormButtonComponent,
  text:FormInputComponent,
  password:FormInputComponent,
  // select:FormSelectComponent,
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config : FieldConfig;
 

  @Input() group :FormGroup;

  @Input() fieldDataOnEdit:any;

  componentRef:any;


  constructor(
    private resolver :ComponentFactoryResolver,
    private container :ViewContainerRef,
  ) { }

  
  ngOnInit(){
      
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.config.inputType]);
    this.componentRef=this.container.createComponent(factory);
    this.componentRef.instance.config=this.config;
    this.componentRef.instance.group=this.group;
    this.componentRef.instance.fieldDataOnEdit=this.fieldDataOnEdit;

   

  }
}
