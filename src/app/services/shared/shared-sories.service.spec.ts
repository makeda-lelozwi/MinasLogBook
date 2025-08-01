import { TestBed } from '@angular/core/testing';

import { SharedSoriesService } from './shared-sories.service';

describe('SharedSoriesService', () => {
  let service: SharedSoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
