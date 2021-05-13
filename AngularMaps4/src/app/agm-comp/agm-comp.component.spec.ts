import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmCompComponent } from './agm-comp.component';

describe('AgmCompComponent', () => {
  let component: AgmCompComponent;
  let fixture: ComponentFixture<AgmCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
