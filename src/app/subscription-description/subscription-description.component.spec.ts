import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionDescriptionComponent } from './subscription-description.component';

describe('SubscriptionDescriptionComponent', () => {
  let component: SubscriptionDescriptionComponent;
  let fixture: ComponentFixture<SubscriptionDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
