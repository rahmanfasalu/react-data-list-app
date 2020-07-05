// import { handleResponse, handleError } from "./apiUtils";
import data from "../_data/cars.json";
import { CarType } from "../interfaces/car.type";

export const carServices = {
  getAllCars,
};

function getAllCars(): CarType[] {
  return data;
}
