export interface CarType {
  make: string;
  model: string;
  year: number | string;
  licenseNumber: string;
  location: string;
  range: number | string;
  numberOfSeats: number | string;
  numberOfDoors: number | string;
}

export interface AppStateType {
  cars: CarType[];
}
