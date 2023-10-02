import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarouritAddComponent } from './farourit-add.component';

describe('FarouritAddComponent', () => {
  let component: FarouritAddComponent;
  let fixture: ComponentFixture<FarouritAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarouritAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarouritAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
