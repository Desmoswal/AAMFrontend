import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFlightAlertComponent } from './no-flight-alert.component';

describe('NoFlightAlertComponent', () => {
  let component: NoFlightAlertComponent;
  let fixture: ComponentFixture<NoFlightAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFlightAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFlightAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
