import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReviewSupervisorComponent } from './feedback-review-supervisor.component';

describe('FeedbackReviewSupervisorComponent', () => {
  let component: FeedbackReviewSupervisorComponent;
  let fixture: ComponentFixture<FeedbackReviewSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackReviewSupervisorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackReviewSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
