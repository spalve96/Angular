import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpolyeeComponent } from './view-empolyee.component';

describe('ViewEmpolyeeComponent', () => {
  let component: ViewEmpolyeeComponent;
  let fixture: ComponentFixture<ViewEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
