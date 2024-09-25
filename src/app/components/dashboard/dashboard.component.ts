import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryService } from '../../services/delivery.service';
import { DeliveryResponseInterface } from '../../interfaces/delivery.interface';
import { DeliveryProgressComponent } from './delivery-progress/delivery-progress.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DeliveryProgressComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  deliveries$?: Observable<DeliveryResponseInterface[]>;

  constructor(private readonly deliveryService: DeliveryService) {}

  ngOnInit() {
    this.deliveries$ = this.deliveryService.getDeliveries();
  }
}
