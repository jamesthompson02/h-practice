import { TestBed } from '@angular/core/testing';

import { FootballRecordsService } from './football-records.service';

describe('FootballRecordsService', () => {
  let service: FootballRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
