const Bug = "bug";
const Dark = "dark";
const Dragon = "dragon";
const Electric = "electric";
const Fairy = "fairy";
const Fighting = "fighting";
const Fire = "fire";
const Flying = "flying";
const Ghost = "ghost";
const Grass = "grass";
const Ground = "ground";
const Ice = "ice";
const Normal = "normal";
const Poison = "poison";
const Psychic = "psychic";
const Rock = "rock";
const Steel = "steel";
const Water = "water";

export const pokemonTypes: any = {
  bug: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334740/bug_jeadn3.png',
    strength: [Grass, Psychic, Dark],
    weakness: [Fighting, Flying, Poison, Ghost, Steel, Fire, Fairy],
    resistance: [Fighting, Ground, Grass],
    vulnerable: [Flying, Rock, Fire],
  },
  dark: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334738/dark_yzkw1k.svg',
    strength: [Ghost, Psychic],
    weakness: [Fighting, Dark, Fairy],
    resistance: [Ghost, Psychic, Dark],
    vulnerable: [Fighting, Bug, Fairy],
  },
  dragon: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334741/dragon_e8wt5c.png',
    strength: [Dragon],
    weakness: [Steel, Fairy],
    resistance: [Fire, Water, Grass, Electric],
    vulnerable: [Ice, Dragon, Fairy],
  },
  electric: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334740/electric_zoiyfu.svg',
    strength: [Flying, Water],
    weakness: [Ground, Grass, Electric, Dragon],
    resistance: [Flying, Steel, Electric],
    vulnerable: [Ground],
  },
  fairy: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334738/fairy_r9bual.svg',
    strength: [Fighting, Dragon, Dark],
    weakness: [Poison, Steel, Fire],
    resistance: [Fighting, Bug, Dragon, Dark],
    vulnerable: [Poison, Steel],
  },
  fighting: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334742/fighting_ec0hjl.svg',
    strength: [Normal, Rock, Steel, Ice, Dark],
    weakness: [Flying, Poison, Psychic, Bug, Ghost, Fairy],
    resistance: [Rock, Bug, Dark],
    vulnerable: [Flying, Psychic, Fairy],
  },
  fire: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334741/fire_knkqkv.png',
    strength: [Bug, Steel, Grass, Ice],
    weakness: [Rock, Fire, Water, Dragon],
    resistance: [Bug, Steel, Fire, Grass, Ice],
    vulnerable: [Ground, Rock, Water],
  },
  flying: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334739/flying_ang3ky.png',
    strength: [Fighting, Bug, Grass],
    weakness: [Rock, Steel, Electric],
    resistance: [Fighting, Ground, Bug, Grass],
    vulnerable: [Rock, Electric, Ice],
  },
  ghost: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334741/ghost_erxz4r.png',
    strength: [Ghost, Psychic],
    weakness: [Normal, Dark],
    resistance: [Normal, Fighting, Poison, Bug],
    vulnerable: [Ghost, Dark],
  },
  grass: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334740/grass_jzlpqd.png',
    strength: [Ground, Rock, Water],
    weakness: [Flying, Poison, Bug, Steel, Fire, Grass, Dragon],
    resistance: [Ground, Water, Grass, Electric],
    vulnerable: [Flying, Poison, Bug, Fire, Ice],
  },
  ground: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334738/ground_wse9mu.svg',
    strength: [Poison, Rock, Steel, Fire, Electric],
    weakness: [Flying, Bug, Grass],
    resistance: [Poison, Rock, Electric],
    vulnerable: [Water, Grass, Ice],
  },
  ice: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334738/ice_ivgxyq.svg',
    strength: [Flying, Ground, Grass, Dragon],
    weakness: [Steel, Fire, Water, Ice],
    resistance: [Ice],
    vulnerable: [Fighting, Rock, Steel, Fire],
  },
  normal: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334739/normal_lldjni.svg',
    strength: [],
    weakness: [Rock, Ghost, Steel],
    resistance: [Ghost],
    vulnerable: [Fighting],
  },
  poison: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334739/poison_g3utlw.svg',
    strength: [Grass, Fairy],
    weakness: [Poison, Ground, Rock, Ghost, Steel],
    resistance: [Fighting, Poison, Grass, Fairy],
    vulnerable: [Ground, Psychic],
  },
  psychic: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334742/psychic_htqul4.svg',
    strength: [Fighting, Poison],
    weakness: [Steel, Psychic, Dark],
    resistance: [Fighting, Psychic],
    vulnerable: [Bug, Ghost, Dark],
  },
  rock: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334741/rock_mjcsa9.svg',
    strength: [Flying, Bug, Fire, Ice],
    weakness: [Fighting, Ground, Steel],
    resistance: [Normal, Flying, Poison, Fire],
    vulnerable: [Fighting, Ground, Steel, Water, Grass],
  },
  steel: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334738/steel_uvbzwk.svg',
    strength: [Rock, Ice, Fairy],
    weakness: [Steel, Fire, Water, Electric],
    resistance: [
      Normal,
      Flying,
      Poison,
      Rock,
      Bug,
      Steel,
      Grass,
      Psychic,
      Ice,
      Dragon,
      Fairy,
    ],
    vulnerable: [Fighting, Ground, Fire],
  },
  water: {
    image: 'https://res.cloudinary.com/dutt68gn6/image/upload/v1695334741/water_hqq2xi.svg',
    strength: [Ground, Rock, Fire],
    weakness: [Water, Grass, Dragon],
    resistance: [Steel, Fire, Water, Ice],
    vulnerable: [Grass, Electric],
  },
};