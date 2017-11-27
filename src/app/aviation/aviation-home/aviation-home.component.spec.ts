import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviationHomeComponent } from './aviation-home.component';

describe('AviationHomeComponent', () => {
  let component: AviationHomeComponent;
  let fixture: ComponentFixture<AviationHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviationHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
