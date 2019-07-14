import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmpolyeeComponent } from './register-empolyee.component';

describe('RegisterEmpolyeeComponent', () => {
  let component: RegisterEmpolyeeComponent;
  let fixture: ComponentFixture<RegisterEmpolyeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEmpolyeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
