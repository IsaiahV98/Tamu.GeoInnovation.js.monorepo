import { async, TestBed } from '@angular/core/testing';
import { LocalStoreModule } from './common-ngx-local-store.module';

describe('LocalStoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LocalStoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LocalStoreModule).toBeDefined();
  });
});