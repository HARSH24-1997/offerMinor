import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportExportsComponent } from './import-exports.component';

describe('ImportExportsComponent', () => {
  let component: ImportExportsComponent;
  let fixture: ComponentFixture<ImportExportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportExportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
