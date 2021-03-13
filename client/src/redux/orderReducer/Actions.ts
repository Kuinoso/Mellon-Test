import * as actions from './Constants';

export const getCharacterInfo = () => async (dispatch: (arg0: { type: string; }) => void) => {
    dispatch({
        type: actions.GET_CHARACTER_INFO,
    });
};