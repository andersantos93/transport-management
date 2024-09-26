import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { DeliveryResponseInterface } from '../interfaces/delivery.interface';
import { urlConfig } from '../config/url.config';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private readonly httpClient: HttpClient) {}

  getDeliveries(): Observable<DeliveryResponseInterface[]> {
    return this.httpClient.get<DeliveryResponseInterface[]>(urlConfig.entregas);
  }
}
