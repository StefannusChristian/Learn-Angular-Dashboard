import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTutorialComponent } from './basic-tutorial.component';

describe('BasicTutorialComponent', () => {
  let component: BasicTutorialComponent;
  let fixture: ComponentFixture<BasicTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTutorialComponent]
    });
    fixture = TestBed.createComponent(BasicTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
