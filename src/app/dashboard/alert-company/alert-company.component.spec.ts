import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCompanyComponent } from './alert-company.component';

describe('AlertCompanyComponent', () => {
  let component: AlertCompanyComponent;
  let fixture: ComponentFixture<AlertCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
