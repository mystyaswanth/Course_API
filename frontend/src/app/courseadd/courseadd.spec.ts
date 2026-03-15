import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courseadd } from './courseadd';

describe('Courseadd', () => {
  let component: Courseadd;
  let fixture: ComponentFixture<Courseadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courseadd],
    }).compileComponents();

    fixture = TestBed.createComponent(Courseadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
