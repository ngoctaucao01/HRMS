import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApplicationAbsentComponent } from './edit-application-absent.component';

describe('EditApplicationAbsentComponent', () => {
  let component: EditApplicationAbsentComponent;
  let fixture: ComponentFixture<EditApplicationAbsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApplicationAbsentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApplicationAbsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
