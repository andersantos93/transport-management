import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import {
  DeliveryResponseInterface,
  FailureDeliveryInterface,
} from '../../../interfaces/delivery.interface';
import { DeliveryStatus } from '../../../enums/delivery-status.enum';

@Component({
  selector: 'app-delivery-quantity',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './delivery-quantity.component.html',
  styleUrl: './delivery-quantity.component.scss',
})
export class DeliveryQuantityComponent implements OnInit {
  @Input() deliveries: DeliveryResponseInterface[] = [];
  failureDeliveries: FailureDeliveryInterface[] = [];
  displayedColumns: string[] = ['motorista', 'quantidade'];

  ngOnInit() {
    this.filterFailureDelivery();
  }

  filterFailureDelivery() {
    let data: any = [];
    this.deliveries.forEach((delivery) => {
      const motorista = delivery.motorista.nome;

      if (data[motorista] === undefined) {
        data[motorista] = { motorista, quantidade: 0 };
      }

      if (delivery.status_entrega === DeliveryStatus.INSUCESSO) {
        data[motorista].quantidade++;
      }
    });
    this.failureDeliveries = Object.values(data);
  }
}
