import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalAlertComponent } from './cal-alert.component';

describe('CalAlertComponent', () => {
  let component: CalAlertComponent;
  let fixture: ComponentFixture<CalAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
