import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { DeliveryService } from './delivery.service';
import { DeliveryResponseInterface } from '../interfaces/delivery.interface';
import { urlConfig } from '../config/url.config';

describe('DeliveryService', () => {
  let service: DeliveryService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  const mock = [
    {
      id: '1',
      documento: '01021',
      motorista: {
        nome: 'Carlos Pereira',
      },
      cliente_origem: {
        nome: 'Empresa ABC',
        endereco: 'Rua dos Pinheiros, 789',
        bairro: 'Jardins',
        cidade: 'São Paulo',
      },
      cliente_destino: {
        nome: 'Ana Clara',
        endereco: 'Rua Vergueiro, 1234',
        bairro: 'Liberdade',
        cidade: 'São Paulo',
      },
      status_entrega: 'ENTREGUE',
    },
    {
      id: '2',
      documento: '01022',
      motorista: {
        nome: 'Carla Souza',
      },
      cliente_origem: {
        nome: 'Empresa DEF',
        endereco: 'Rua Augusta, 345',
        bairro: 'Consolação',
        cidade: 'São Paulo',
      },
      cliente_destino: {
        nome: 'Pedro Lima',
        endereco: 'Avenida Brasil, 1010',
        bairro: 'Jardins',
        cidade: 'São Paulo',
      },
      status_entrega: 'PENDENTE',
    },
    {
      id: '3',
      documento: '01023',
      motorista: {
        nome: 'Maria Oliveira',
      },
      cliente_origem: {
        nome: 'Empresa GHI',
        endereco: 'Avenida Ibirapuera, 890',
        bairro: 'Moema',
        cidade: 'São Paulo',
      },
      cliente_destino: {
        nome: 'João Mendes',
        endereco: 'Rua Pamplona, 567',
        bairro: 'Jardim Paulista',
        cidade: 'São Paulo',
      },
      status_entrega: 'PENDENTE',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DeliveryService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should receive deliveries when request endpoint', () => {
    const url = urlConfig.entregas;
    httpClient
      .get<DeliveryResponseInterface[]>(url)
      .subscribe((data) => expect(data).toEqual(mock));

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    req.flush(mock);
    httpTestingController.verify();
  });
});
