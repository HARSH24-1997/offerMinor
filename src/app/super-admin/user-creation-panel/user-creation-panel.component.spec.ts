import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationPanelComponent } from './user-creation-panel.component';

describe('UserCreationPanelComponent', () => {
  let component: UserCreationPanelComponent;
  let fixture: ComponentFixture<UserCreationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreationPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
