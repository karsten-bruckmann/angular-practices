import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareOpossumsComponent } from './compare-opossums.component';

describe('CompareOpossumsComponent', () => {
  let component: CompareOpossumsComponent;
  let fixture: ComponentFixture<CompareOpossumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareOpossumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareOpossumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
