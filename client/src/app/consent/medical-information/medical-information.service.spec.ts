/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicalInformationService } from './medical-information.service';

describe('MedicalInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalInformationService]
    });
  });

  it('should ...', inject([MedicalInformationService], (service: MedicalInformationService) => {
    expect(service).toBeTruthy();
  }));
});
