import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacComponent } from './contac.component';

describe('ContacComponent', () => {
  let component: ContacComponent;
  let fixture: ComponentFixture<ContacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacComponent]
    });
    fixture = TestBed.createComponent(ContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
