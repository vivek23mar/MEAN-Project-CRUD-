import { TestBed } from '@angular/core/testing';

import { CreateemployeeService } from './createemployee.service';

describe('CreateemployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateemployeeService = TestBed.get(CreateemployeeService);
    expect(service).toBeTruthy();
  });
});
