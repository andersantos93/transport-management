import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { DeliveryResponseInterface } from '../../../interfaces/delivery.interface';

@Component({
  selector: 'app-delivery-quantity',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './delivery-quantity.component.html',
  styleUrl: './delivery-quantity.component.scss',
})
export class DeliveryQuantityComponent {
  @Input() deliveries: DeliveryResponseInterface[] = [];
}
