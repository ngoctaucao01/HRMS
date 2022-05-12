import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesWfhComponent } from './employees-wfh.component';

describe('EmployeesWfhComponent', () => {
  let component: EmployeesWfhComponent;
  let fixture: ComponentFixture<EmployeesWfhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesWfhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesWfhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
