import {Dispatch} from "react";
import {groceryAPI, GroceryType} from "../api/api";

export type InitialStateType = {
  grocery: Array<GroceryType>
}

const initialState: InitialStateType = {
  grocery: []
}

export const GroceryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET-GROCERY':
      return {
        ...state,
        grocery: action.grocery
      }
    default:
      return state
  }
}

// actions

export const setGroceryAC = (grocery: Array<GroceryType>) => ({type: 'SET-GROCERY', grocery} as const);

// thunks

export const setGroceryTC = () => {
  return (dispatch: ThunkDispatch) => {
    groceryAPI.getGrocery()
      .then((res) => {
        dispatch(setGroceryAC(res.data))
      })
      .catch(error => {
        console.log(error, dispatch);
      })
  }
}
// types

export type SetGroceryActionType = ReturnType<typeof setGroceryAC>;

type ActionsType = SetGroceryActionType;

type ThunkDispatch = Dispatch<ActionsType>