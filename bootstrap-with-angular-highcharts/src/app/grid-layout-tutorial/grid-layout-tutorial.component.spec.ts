import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutTutorialComponent } from './grid-layout-tutorial.component';

describe('GridLayoutTutorialComponent', () => {
  let component: GridLayoutTutorialComponent;
  let fixture: ComponentFixture<GridLayoutTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridLayoutTutorialComponent]
    });
    fixture = TestBed.createComponent(GridLayoutTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
