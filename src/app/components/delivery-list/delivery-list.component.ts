import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { DeliveryService } from '../../services/delivery.service';
import { DeliveryListInterface } from '../../interfaces/delivery.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.scss',
})
export class DeliveryListComponent implements OnInit {
  deliveryList: DeliveryListInterface[] = [];
  displayedColumns: string[] = ['motorista', 'origem', 'destino', 'status'];
  dataSource!: MatTableDataSource<DeliveryListInterface>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.deliveryService.getDeliveries().subscribe((deliveries) => {
      deliveries.map((delivery) => {
        this.deliveryList.push({
          motorista: delivery.motorista.nome,
          origem: `${delivery.cliente_origem.endereco} - ${delivery.cliente_origem.bairro}`,
          destino: `${delivery.cliente_destino.endereco} - ${delivery.cliente_destino.bairro}`,
          status: delivery.status_entrega,
        });
      });
      this.dataSource = new MatTableDataSource(this.deliveryList);
      this.dataSource.paginator = this.paginator;
    });
  }
}
