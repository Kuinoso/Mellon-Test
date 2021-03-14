import * as actions from "./Constants";

const initialState = {
  shippingMethods: null,
  order: null,
};

export default function Reducer(
  state = initialState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case actions.GET_SHIPPING_METHODS:
      return {
        ...state,
        shippingMethods: action.payload,
      };
    case actions.GET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}
