import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-delivery-list',
  standalone: true,
  imports: [],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.scss',
})
export class DeliveryListComponent implements OnInit {
  constructor(private readonly deliveryService: DeliveryService) {}

  ngOnInit(): void {}
}
