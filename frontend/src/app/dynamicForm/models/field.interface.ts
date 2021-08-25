import { FormGroup, ValidatorFn } from "@angular/forms";

export interface FieldConfig {

  disabled?: boolean,
  label?: string,
  name: string,
  options?: string[],
  placeholder?: string,
  type: string,
  validation?: ValidatorFn[],
  value?: any,
  fieldTitle?: string;
  fieldName?: string;
  inputType?: string;
  values?: any[];
  collections?: any;
  subFields?: any[];
  max?: string;
  required?: boolean;
  autoFill?: string;
  multi?: boolean;
  service?: string;
  dependent?: string;
  addMore?: string;
  hidden?: boolean;
  hasDependent?: boolean;
  

}

export interface Field{
  config : FieldConfig,
  group: FormGroup
}