export interface Ipost {
  body: number
  id: number
  title: string
  userId: number
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  address: Address;
  username: string;
}

interface Address {
  street: string;
  suite: string;
  'city': string;
  'zipcode': string;
  geo: Geo;
}

interface Geo {
  'lat': string;
  'lng': string;
}

