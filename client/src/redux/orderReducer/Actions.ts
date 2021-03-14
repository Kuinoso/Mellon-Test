import * as actions from './Constants';

export const getShippingMethods = (props: []) => async (dispatch: (arg0: { type: string; payload: []}) => void) => {
    dispatch({
        type: actions.GET_SHIPPING_METHODS,
        payload: props
    });
};