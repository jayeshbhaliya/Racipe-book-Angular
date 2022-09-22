import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacipeEditComponent } from './racipe-edit.component';

describe('RacipeEditComponent', () => {
  let component: RacipeEditComponent;
  let fixture: ComponentFixture<RacipeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacipeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacipeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
