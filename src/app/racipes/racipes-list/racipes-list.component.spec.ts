import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacipesListComponent } from './racipes-list.component';

describe('RacipesListComponent', () => {
  let component: RacipesListComponent;
  let fixture: ComponentFixture<RacipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacipesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
