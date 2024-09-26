import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDistrictComponent } from './delivery-district.component';

describe('DeliveryDistrictComponent', () => {
  let component: DeliveryDistrictComponent;
  let fixture: ComponentFixture<DeliveryDistrictComponent>;

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
      imports: [DeliveryDistrictComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter delivery by district', () => {
    component.deliveries = mock;
    fixture.detectChanges();
    component.filterDeliveryByDistrict();
    const result = [
      {
        bairro: 'Liberdade',
        total: 1,
        entregues: 1,
      },
      {
        bairro: 'Jardins',
        total: 1,
        entregues: 0,
      },
      {
        bairro: 'Jardim Paulista',
        total: 1,
        entregues: 0,
      },
    ];
    expect(component.districtDeliveries).toEqual(result);
  });
});
