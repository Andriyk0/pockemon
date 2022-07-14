export const getPockemonSeclectors = (query:string, optionValue:string) => {
  return (state:State) => {
    return state.pockemons.filter(pockemon => {
      let data;

      if (optionValue) {
        data = pockemon.name.toLowerCase().includes(query.toLowerCase())
        && pockemon.info.types.some(item => item.type.name === optionValue);
      } else {
        data = pockemon.name.toLowerCase().includes(query.toLowerCase());
      }

      return data;
    });
  };
};
