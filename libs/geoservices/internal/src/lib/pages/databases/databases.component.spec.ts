import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasesComponent } from './databases.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DatabasesComponent', () => {
  let component: DatabasesComponent;
  let fixture: ComponentFixture<DatabasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DatabasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
