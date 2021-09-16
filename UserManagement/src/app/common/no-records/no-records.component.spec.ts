import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NoRecordsComponent } from './no-records.component';

describe('NoRecordsComponent', () => {
  let component: NoRecordsComponent;
  let fixture: ComponentFixture<NoRecordsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
