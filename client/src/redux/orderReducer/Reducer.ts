import * as actions from './Constants';

const initialState = {
  characterId: null,
};

export default function Reducer(state = initialState, action: { type: string; payload?: any; }) {
  switch (action.type) {
    case actions.GET_CHARACTER_INFO:
      return {
        ...state,
        characterId: action.payload
      };
    default:
      return state;
  }
};