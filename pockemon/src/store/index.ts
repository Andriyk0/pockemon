import { createStore } from 'redux';
import { SET_POCKEMONS } from './action';

const InitialState: State = {
  pockemons: [],
};

const reducer = (state = InitialState, action: Action) => {
  switch (action.type) {
    case SET_POCKEMONS:
      return {
        ...state,
        pockemons: [...action.payload],
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
