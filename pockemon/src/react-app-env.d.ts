/// <reference types="react-scripts" />

interface Pockemon {
  name: string,
  url: string,
  info: Info
}

interface Info {
  sprites: string,
  moves: Moves[],
  stats: Stat[],
  types: Type[]
}

interface State {
  pockemons: Pockemon[],
}

interface Action {
  type:string,
  payload: Pockemon[]
}

interface Moves {
  move: Move
}

interface Move {
  name: string
}

interface Stat {
  base_stat: number
  stat: Name
}

interface Name {
  name: string
}

interface Type {
  type: T
}

interface T {
  name:string
}
