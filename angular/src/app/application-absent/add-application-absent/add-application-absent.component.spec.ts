import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationAbsentComponent } from './add-application-absent.component';

describe('AddApplicationAbsentComponent', () => {
  let component: AddApplicationAbsentComponent;
  let fixture: ComponentFixture<AddApplicationAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApplicationAbsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
