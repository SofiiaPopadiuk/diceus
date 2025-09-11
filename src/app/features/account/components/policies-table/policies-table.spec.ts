import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesTable } from './policies-table';

describe('PoliciesTable', () => {
  let component: PoliciesTable;
  let fixture: ComponentFixture<PoliciesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
