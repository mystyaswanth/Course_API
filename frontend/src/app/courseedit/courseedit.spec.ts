import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courseedit } from './courseedit';

describe('Courseedit', () => {
  let component: Courseedit;
  let fixture: ComponentFixture<Courseedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courseedit],
    }).compileComponents();

    fixture = TestBed.createComponent(Courseedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
