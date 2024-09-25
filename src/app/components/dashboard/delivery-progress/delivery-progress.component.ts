import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import {
  DeliveryProgressInterface,
  DeliveryResponseInterface,
} from '../../../interfaces/delivery.interface';
import { DeliveryStatus } from '../../../enums/delivery-status.enum';

@Component({
  selector: 'app-delivery-progress',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatToolbarModule],
  templateUrl: './delivery-progress.component.html',
  styleUrl: './delivery-progress.component.scss',
})
export class DeliveryProgressComponent implements OnInit {
  @Input() deliveries: DeliveryResponseInterface[] = [];
  deliveriesProgress: DeliveryProgressInterface[] = [];
  displayedColumns: string[] = ['motorista', 'qtd_pendentes', 'qtd_entregas'];

  ngOnInit() {
    this.filterDeliveryByDriver();
  }

  filterDeliveryByDriver() {
    let data: any = [];
    this.deliveries.forEach((delivery) => {
      const motorista = delivery.motorista.nome;

      if (data[motorista] === undefined) {
        data[motorista] = { motorista, entregues: 0, pendentes: 0 };
      }

      if (delivery.status_entrega === DeliveryStatus.ENTREGUE) {
        data[motorista].entregues++;
      } else if (delivery.status_entrega === DeliveryStatus.PENDENTE) {
        data[motorista].pendentes++;
      }
    });
    this.deliveriesProgress = Object.values(data);
  }
}
