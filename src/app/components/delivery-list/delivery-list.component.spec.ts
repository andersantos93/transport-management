import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DeliveryListComponent } from './delivery-list.component';
import { DeliveryService } from '../../services/delivery.service';
import { of } from 'rxjs';

describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryListComponent, BrowserAnimationsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: DeliveryService,
          useValue: {
            getDeliveries: () => of(mock),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive deliveries and map to list when request to service', () => {
    component.ngOnInit();
    const result = {
      destino: 'Rua Vergueiro, 1234 - Liberdade',
      origem: 'Rua dos Pinheiros, 789 - Jardins',
      motorista: 'Carlos Pereira',
      status: 'ENTREGUE',
    };
    expect(component.deliveryList[0]).toEqual(result);
  });
});
