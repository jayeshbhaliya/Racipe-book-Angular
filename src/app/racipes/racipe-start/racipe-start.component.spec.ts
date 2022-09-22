import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacipeStartComponent } from './racipe-start.component';

describe('RacipeStartComponent', () => {
  let component: RacipeStartComponent;
  let fixture: ComponentFixture<RacipeStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacipeStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacipeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
