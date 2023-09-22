import useSWR from "swr";
import { AxiosError } from "axios";
import { getEvolutionDetails } from "./pokemonApi";

export default function useEvolution(url: string) {
  const { data, isLoading } = useSWR(url, async () => {
    try {
      return await getEvolutionDetails(url);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      } else {
        throw error;
      }
    }
  });

  return {
    evolutions: data?.evolutions,
    speciesData: data?.speciesData,
    isLoading,
  }
}