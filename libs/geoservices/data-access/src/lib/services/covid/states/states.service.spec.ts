import { TestBed } from '@angular/core/testing';

import { StatesService } from './states.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EnvironmentModule, env } from '@tamu-gisc/common/ngx/environment';

describe('StatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, EnvironmentModule],
    providers: [
      {
        provide: env, 
        useValue: { covid_api_url : 'https://' }
      }
    ]
  }));

  it('should be created', () => {
    const service: StatesService = TestBed.get(StatesService);
    expect(service).toBeTruthy();
  });
});
