import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpolyeeComponent } from './edit-empolyee.component';

describe('EditEmpolyeeComponent', () => {
  let component: EditEmpolyeeComponent;
  let fixture: ComponentFixture<EditEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
