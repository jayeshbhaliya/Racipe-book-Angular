import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacipesComponent } from './racipes.component';

describe('RacipesComponent', () => {
  let component: RacipesComponent;
  let fixture: ComponentFixture<RacipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
