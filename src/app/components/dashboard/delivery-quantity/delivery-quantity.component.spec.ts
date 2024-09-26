import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryQuantityComponent } from './delivery-quantity.component';

describe('DeliveryQuantityComponent', () => {
  let component: DeliveryQuantityComponent;
  let fixture: ComponentFixture<DeliveryQuantityComponent>;

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
      status_entrega: 'INSUCESSO',
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
      status_entrega: 'INSUCESSO',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryQuantityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter deliveries failures when request to service', () => {
    component.deliveries = mock;
    const result = [
      {
        motorista: 'Carlos Pereira',
        quantidade: 0,
      },
      {
        motorista: 'Carla Souza',
        quantidade: 1,
      },
      {
        motorista: 'Maria Oliveira',
        quantidade: 1,
      },
    ];
    component.filterFailureDelivery();
    expect(component.failureDeliveries).toEqual(result);
  });
});
