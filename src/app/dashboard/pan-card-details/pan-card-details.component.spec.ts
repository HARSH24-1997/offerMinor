import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanCardDetailsComponent } from './pan-card-details.component';

describe('PanCardDetailsComponent', () => {
  let component: PanCardDetailsComponent;
  let fixture: ComponentFixture<PanCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
