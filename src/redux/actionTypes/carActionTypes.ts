import { CarType } from "../../interfaces/car.type";

export const LOAD_CAR_ACTION_SUCCESS = "LOAD_CAR_ACTION_SUCCESS";
export const FETCH_CAR_ACTION = "FETCH_CAR_ACTION";

export interface fetchCarActionType {
  type: typeof FETCH_CAR_ACTION;
}
export interface LoadCarActionType {
  type: typeof LOAD_CAR_ACTION_SUCCESS;
  payload: CarType[];
}

export type carActionType = LoadCarActionType | fetchCarActionType;
