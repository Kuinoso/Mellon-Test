import * as actions from "./Constants";
import CompleteOrder from "../../interfaces/CompleteOrder";

export const getShippingMethods = (props: []) => async (
  dispatch: (arg0: { type: string; payload: [] }) => void
) => {
  dispatch({
    type: actions.GET_SHIPPING_METHODS,
    payload: props,
  });
};

export const getOrder = (props: CompleteOrder) => async (
  dispatch: (arg0: { type: string; payload: CompleteOrder }) => void
) => {
  dispatch({
    type: actions.GET_ORDER,
    payload: props,
  });
};
