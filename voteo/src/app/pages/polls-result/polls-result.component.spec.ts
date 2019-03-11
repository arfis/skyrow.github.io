import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsResultComponent } from './polls-result.component';

describe('PollsResultComponent', () => {
  let component: PollsResultComponent;
  let fixture: ComponentFixture<PollsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
