import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDistrictComponent } from './delivery-district.component';

describe('DeliveryDistrictComponent', () => {
  let component: DeliveryDistrictComponent;
  let fixture: ComponentFixture<DeliveryDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryDistrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
