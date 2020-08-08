import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFinalComponent } from './random-final.component';

describe('RandomFinalComponent', () => {
  let component: RandomFinalComponent;
  let fixture: ComponentFixture<RandomFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
