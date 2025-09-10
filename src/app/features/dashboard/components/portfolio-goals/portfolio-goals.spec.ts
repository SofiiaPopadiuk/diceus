import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioGoals } from './portfolio-goals';

describe('PortfolioGoals', () => {
  let component: PortfolioGoals;
  let fixture: ComponentFixture<PortfolioGoals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioGoals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioGoals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
