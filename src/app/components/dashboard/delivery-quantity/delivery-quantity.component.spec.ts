import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryQuantityComponent } from './delivery-quantity.component';

describe('DeliveryQuantityComponent', () => {
  let component: DeliveryQuantityComponent;
  let fixture: ComponentFixture<DeliveryQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryQuantityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
