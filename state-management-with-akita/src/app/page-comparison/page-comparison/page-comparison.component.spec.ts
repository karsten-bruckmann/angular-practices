import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComparisonComponent } from './page-comparison.component';

describe('PageComparisonComponent', () => {
  let component: PageComparisonComponent;
  let fixture: ComponentFixture<PageComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
