import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegListComponent } from './leg-list.component';

describe('LegListComponent', () => {
  let component: LegListComponent;
  let fixture: ComponentFixture<LegListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
