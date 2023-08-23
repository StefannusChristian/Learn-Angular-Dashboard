import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineChartComponent } from './combine-chart.component';

describe('CombineChartComponent', () => {
  let component: CombineChartComponent;
  let fixture: ComponentFixture<CombineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombineChartComponent]
    });
    fixture = TestBed.createComponent(CombineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
