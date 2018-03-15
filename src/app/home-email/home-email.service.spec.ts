import { TestBed, inject } from '@angular/core/testing';

import { HomeEmailService } from './home-email.service';

describe('HomeEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeEmailService]
    });
  });

  it('should be created', inject([HomeEmailService], (service: HomeEmailService) => {
    expect(service).toBeTruthy();
  }));
});
