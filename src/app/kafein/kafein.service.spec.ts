/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KafeinService } from './kafein.service';

describe('Service: Kafein', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KafeinService]
    });
  });

  it('should ...', inject([KafeinService], (service: KafeinService) => {
    expect(service).toBeTruthy();
  }));
});
