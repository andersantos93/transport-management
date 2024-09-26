import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProgressComponent } from './delivery-progress.component';

describe('DeliveryProgressComponent', () => {
  let component: DeliveryProgressComponent;
  let fixture: ComponentFixture<DeliveryProgressComponent>;

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
      imports: [DeliveryProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter deliveries by driver when request to service', () => {
    component.deliveries = mock;
    const result = [
      {
        motorista: 'Carlos Pereira',
        entregues: 1,
        pendentes: 0,
      },
      {
        motorista: 'Carla Souza',
        entregues: 0,
        pendentes: 1,
      },
      {
        motorista: 'Maria Oliveira',
        entregues: 0,
        pendentes: 1,
      },
    ];
    component.filterDeliveryByDriver();
    expect(component.deliveriesProgress).toEqual(result);
  });
});
