import { TestBed, inject } from '@angular/core/testing';

import { MultiPlayerService } from './multi-player.service';

describe('MultiPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiPlayerService]
    });
  });

  it('should be created', inject([MultiPlayerService], (service: MultiPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
