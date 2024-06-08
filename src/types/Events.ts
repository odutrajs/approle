export interface Event {
  id: number;
  title: string;
  time: string;
  hour: string;
  location: string;
  street: string;
  ticketMedioMin: number;
  ticketMedioMax: number;
  image: any;
  TipoOrganizador: string;
  NomeEmpresa: string;
  logo: any;
  QntdStars: number;
  description?: string;
  latitude: number;
  longitude: number;
}
