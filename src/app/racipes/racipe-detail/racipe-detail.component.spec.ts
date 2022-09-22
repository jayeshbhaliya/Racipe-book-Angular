import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacipeDetailComponent } from './racipe-detail.component';

describe('RacipeDetailComponent', () => {
  let component: RacipeDetailComponent;
  let fixture: ComponentFixture<RacipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacipeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
