export interface DeliveryResponseInterface {
  id: string;
  documento: string;
  motorista: MotoristaInterface;
  cliente_origem: ClienteOrigemInterface;
  cliente_destino: ClienteDestinoInterface;
  status_entrega: string;
}

export interface MotoristaInterface {
  nome: string;
}

export interface ClienteOrigemInterface {
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
}

export interface ClienteDestinoInterface {
  nome: string;
  endereco: string;
  bairro: string;
  cidade: string;
}

export interface DeliveryProgressInterface {
  motorista: string;
  entregues: number;
  pendentes: number;
}

export interface FailureDeliveryInterface {
  motorista: string;
  quantidade: number;
}

export interface DistrictDeliveryInterface {
  bairro: string;
  total_entregas: number;
  realizados: number;
}
