import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsComponent } from './reports.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

describe('ReportsComponent', () => {
  let component: ReportsComponent;
  let fixture: ComponentFixture<ReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsComponent],
      providers: [provideCharts(withDefaultRegisterables())],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
