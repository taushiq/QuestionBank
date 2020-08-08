import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualFinalComponent } from './manual-final.component';

describe('ManualFinalComponent', () => {
  let component: ManualFinalComponent;
  let fixture: ComponentFixture<ManualFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
