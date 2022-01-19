// export interface Address {
//   id: number;
//   city: string;
//   county: string;
//   state: string;
//   zipcode: number;
// }
export interface Address {
  cep: number;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: number;
  gia: number;
  ddd: number;
  siafi: number;
}
