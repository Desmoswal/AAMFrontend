import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormDetailComponent } from './reserve-form-detail.component';

describe('ReserveFormDetailComponent', () => {
  let component: ReserveFormDetailComponent;
  let fixture: ComponentFixture<ReserveFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
