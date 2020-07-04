import { CarType } from "./../../interfaces/car.type";
import * as types from "../actionTypes/carActionTypes";
import { carServices } from "../../api/apiServices";

export const loadDataActionSuccess = (data: CarType[]): types.carActionType => {
  return {
    type: types.LOAD_CAR_ACTION_SUCCESS,
    payload: data,
  };
};

export const loadDataAction = (): types.carActionType => {
  return {
    type: types.FETCH_CAR_ACTION,
  };
};

export function loadCars() {
  return function (dispatch: (arg0: any) => void) {
    dispatch(loadDataAction());
    var data = carServices.getAllCars();
    dispatch(loadDataActionSuccess(data));
  };
}
