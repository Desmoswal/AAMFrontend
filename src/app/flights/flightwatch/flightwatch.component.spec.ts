import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightwatchComponent } from './flightwatch.component';

describe('FlightwatchComponent', () => {
  let component: FlightwatchComponent;
  let fixture: ComponentFixture<FlightwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
