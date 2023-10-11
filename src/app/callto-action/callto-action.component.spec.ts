import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalltoActionComponent } from './callto-action.component';

describe('CalltoActionComponent', () => {
  let component: CalltoActionComponent;
  let fixture: ComponentFixture<CalltoActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalltoActionComponent]
    });
    fixture = TestBed.createComponent(CalltoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
