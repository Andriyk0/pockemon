export const SET_POCKEMONS = 'SET_POCKEMONS';

export const setPockemonAction = (payload: Pockemon[]):Action => ({
  type: SET_POCKEMONS,
  payload,
});
