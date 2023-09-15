export type pokemonTypes =
  | "Colorless"
  | "Darkness"
  | "Dragon"
  | "Fairy"
  | "Fighting"
  | "Fire"
  | "Grass"
  | "Lightning"
  | "Metal"
  | "Psychic"
  | "Water";

export type PokemonCardType = {
  id: string;
  name: string;
  supertype: string;
  subtypes?: string[] | null;
  hp: string;
  types?: string[] | null;
  evolvesFrom: string;
  attacks?: AttacksEntity[] | null;
  weaknesses?: WeaknessesEntityOrResistancesEntity[] | null;
  resistances?: WeaknessesEntityOrResistancesEntity[] | null;
  retreatCost?: string[] | null;
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers?: number[] | null;
  legalities: Legalities;
  images: Images;
  tcgplayer: Tcgplayer;
  cardmarket: Cardmarket;
};
export type AttacksEntity = {
  name: string;
  cost?: string[] | null;
  convertedEnergyCost: number;
  damage: string;
  text: string;
};
export type WeaknessesEntityOrResistancesEntity = {
  type: string;
  value: string;
};
export type Set = {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Images1;
};
export type Legalities = {
  unlimited: string;
};
export type Images1 = {
  symbol: string;
  logo: string;
};
export type Images = {
  small: string;
  large: string;
};
export type Tcgplayer = {
  url: string;
  updatedAt: string;
  prices: Prices;
};
export type Prices = {
  holofoil: Holofoil;
  reverseHolofoil: ReverseHolofoil;
};
export type Holofoil = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow?: null;
};
export type ReverseHolofoil = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
};
export type Cardmarket = {
  url: string;
  updatedAt: string;
  prices: Prices1;
};
export type Prices1 = {
  averageSellPrice: number;
  lowPrice: number;
  trendPrice: number;
  germanProLow: number;
  suggestedPrice: number;
  reverseHoloSell: number;
  reverseHoloLow: number;
  reverseHoloTrend: number;
  lowPriceExPlus: number;
  avg1: number;
  avg7: number;
  avg30: number;
  reverseHoloAvg1: number;
  reverseHoloAvg7: number;
  reverseHoloAvg30: number;
};
