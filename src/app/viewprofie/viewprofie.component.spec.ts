import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofieComponent } from './viewprofie.component';

describe('ViewprofieComponent', () => {
  let component: ViewprofieComponent;
  let fixture: ComponentFixture<ViewprofieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprofieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprofieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
