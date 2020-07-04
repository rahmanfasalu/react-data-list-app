import { CarType } from "./../../interfaces/car.type";
import * as types from "../actionTypes/carActionTypes";
import initialState from "../initialState";

import { carActionType } from "../actionTypes/carActionTypes";

export default function dataReducer(
  state: CarType[] = initialState.cars,
  action: carActionType
) {
  switch (action.type) {
    case types.LOAD_CAR_ACTION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
