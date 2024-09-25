import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import {
  DeliveryResponseInterface,
  DistrictDeliveryInterface,
} from '../../../interfaces/delivery.interface';
import { DeliveryStatus } from '../../../enums/delivery-status.enum';

@Component({
  selector: 'app-delivery-district',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './delivery-district.component.html',
  styleUrl: './delivery-district.component.scss',
})
export class DeliveryDistrictComponent implements OnInit {
  @Input() deliveries: DeliveryResponseInterface[] = [];
  districtDeliveries: DistrictDeliveryInterface[] = [];
  displayedColumns: string[] = ['bairro', 'total', 'entregues'];

  ngOnInit(): void {
    this.filterDeliveryByDistrict();
  }

  filterDeliveryByDistrict() {
    let data: any = [];
    this.deliveries.forEach((delivery) => {
      const bairro = delivery.cliente_destino.bairro;

      if (data[bairro] === undefined) {
        data[bairro] = { bairro, total: 0, entregues: 0 };
      }

      data[bairro].total++;

      if (delivery.status_entrega === DeliveryStatus.ENTREGUE) {
        data[bairro].entregues++;
      }
    });
    this.districtDeliveries = Object.values(data);
  }
}
