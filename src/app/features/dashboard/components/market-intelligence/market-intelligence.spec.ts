import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketIntelligence } from './market-intelligence';

describe('MarketIntelligence', () => {
  let component: MarketIntelligence;
  let fixture: ComponentFixture<MarketIntelligence>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketIntelligence]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketIntelligence);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
