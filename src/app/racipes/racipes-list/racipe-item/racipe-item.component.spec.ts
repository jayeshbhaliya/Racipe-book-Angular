import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacipeItemComponent } from './racipe-item.component';

describe('RacipeItemComponent', () => {
  let component: RacipeItemComponent;
  let fixture: ComponentFixture<RacipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacipeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
