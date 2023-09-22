import useSWR from "swr";
import { AxiosError } from "axios";
import { getPokemon } from "./pokemonApi";

export default function usePokemon(name: string) {

    const { data, isLoading, mutate } = useSWR(name, async () => {
        try {
            return await getPokemon(name);
        } catch (error) {
            if (error instanceof AxiosError && error.response?.status === 404) {
                return null;
            } else {
                throw error;
            }
        }
    });

    return {
        pokemon: data,
        isLoading,
        mutatePokemon: mutate,
    }
}