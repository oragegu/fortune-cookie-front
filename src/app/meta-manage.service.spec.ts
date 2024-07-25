import { TestBed } from '@angular/core/testing';

import { MetaManageService } from './meta-manage.service';

describe('MetaManageService', () => {
  let service: MetaManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
