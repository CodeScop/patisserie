import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryComponent } from './pastry.component';

describe('PastryComponent', () => {
  let component: PastryComponent;
  let fixture: ComponentFixture<PastryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
