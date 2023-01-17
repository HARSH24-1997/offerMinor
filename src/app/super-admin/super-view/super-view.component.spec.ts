import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperViewComponent } from './super-view.component';

describe('SuperViewComponent', () => {
  let component: SuperViewComponent;
  let fixture: ComponentFixture<SuperViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
