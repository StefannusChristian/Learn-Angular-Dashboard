import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartModifComponent } from './pie-chart-modif.component';

describe('PieChartModifComponent', () => {
  let component: PieChartModifComponent;
  let fixture: ComponentFixture<PieChartModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartModifComponent]
    });
    fixture = TestBed.createComponent(PieChartModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
