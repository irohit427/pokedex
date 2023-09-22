export interface PokemonPage {
  results: {
    name: string
  } [],
  next: string | null,
  previous: string | null
}

export type Pokemon = {
  name: string,
  weight: number,
  height: number,
  id: number,
  species: {
    url: string,
  },
  moves: [ 
    {
      move: {
        name: string,
      }
    } [],
  ],
  types: {
    type: {
      name: string,
    }
  }[],
  stats: [
    {
      base_stat: number,
      stat: {
        name: string,
      },
    },
  ],
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
}