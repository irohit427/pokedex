import axiosInstance from "@/lib/axios";
import { Pokemon, PokemonPage } from "@/types";
import axios from "axios";

export async function getPokemon(name: string) {
  const response = await axiosInstance.get<Pokemon>(`/pokemon/${name}`);
  return response.data;
}

export const getPokemonPage = async  (page: number) => {
  const pageSize = 12;
  const response = await axiosInstance.get<PokemonPage>(`/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`);
  return response.data;
}

const getEvolutions = (chain: any, evolutions: string[]) => {
  evolutions.push(chain.species.name);
  chain.evolves_to.map((pokemon: any) => getEvolutions(pokemon, evolutions));
}

export const getEvolutionDetails = async(url: string) => {
  const speciesData = (await axios.get(url)).data;
  const evolutionUrl = speciesData.evolution_chain.url;
  const evolutionData = (await axios.get(evolutionUrl)).data;
  const evolutions: string[] = [];

  getEvolutions(evolutionData.chain, evolutions);
  return {evolutions, speciesData };
}