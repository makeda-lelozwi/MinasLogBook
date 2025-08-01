import { TestBed } from '@angular/core/testing';

import { CharacterSeviceMinaService } from './character-sevice-mina.service';

describe('CharacterSeviceMinaService', () => {
  let service: CharacterSeviceMinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterSeviceMinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
