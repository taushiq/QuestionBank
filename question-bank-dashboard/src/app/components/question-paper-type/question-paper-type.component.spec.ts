import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperTypeComponent } from './question-paper-type.component';

describe('QuestionPaperTypeComponent', () => {
  let component: QuestionPaperTypeComponent;
  let fixture: ComponentFixture<QuestionPaperTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPaperTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPaperTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
