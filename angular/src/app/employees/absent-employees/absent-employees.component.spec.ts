import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentEmployeesComponent } from './absent-employees.component';

describe('AbsentEmployeesComponent', () => {
  let component: AbsentEmployeesComponent;
  let fixture: ComponentFixture<AbsentEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsentEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
