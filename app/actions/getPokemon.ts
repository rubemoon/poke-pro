"use server";

import { BASE_URL } from "@/lib/data";
import { Pokemon, PokemonData, PokemonType, AbilityData } from "@/lib/types";

type ApiResponse = {
  results: Pokemon[];
};

type TypeApiResponse = {
  results: { name: string; url: string }[];
};

type AbilityApiResponse = {
  results: { name: string; url: string }[];
};

export async function fetchPokemonList({ query = "", page = 1, limit = 24 }: { query?: string; page?: number; limit?: number }): Promise<Pokemon[]> {
  const offset = (page - 1) * limit;
  const apiUrl = `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();

    if (query) {
      const filteredPokemon = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(query.toLowerCase())
      );
      return filteredPokemon.slice(0, limit);
    }

    return data.results.slice(0, limit);
  } catch (error) {
    console.error("Failed to fetch Pokémon list:", error);
    return [];
  }
}

export async function fetchPokemonDetails(name: string): Promise<PokemonData | null> {
  const apiUrl = `${BASE_URL}/pokemon/${name}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching Pokémon details: ${response.statusText}`);
    }
    const data: PokemonData = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokémon details:", error);
    return null;
  }
}

export async function fetchPokemonType(name: string): Promise<PokemonType | null> {
  const apiUrl = `${BASE_URL}/type/${name}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching Pokémon type: ${response.statusText}`);
    }
    const data: PokemonType = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Pokémon type:", error);
    return null;
  }
}

export async function fetchPokemonTypes(): Promise<{ name: string; url: string }[]> {
  const apiUrl = `${BASE_URL}/type`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching Pokémon types: ${response.statusText}`);
    }
    const data: TypeApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch Pokémon types:", error);
    return [];
  }
}

export async function fetchAbility(name: string): Promise<AbilityData | null> {
  const apiUrl = `${BASE_URL}/ability/${name}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching ability: ${response.statusText}`);
    }
    const data: AbilityData = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch ability:", error);
    return null;
  }
}

export async function fetchAbilities(): Promise<{ name: string; url: string }[]> {
  const apiUrl = `${BASE_URL}/ability`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching abilities: ${response.statusText}`);
    }
    const data: AbilityApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch abilities:", error);
    return [];
  }
}

export async function fetchRandomPokemon(limit = 6): Promise<PokemonData[]> {
  const randomPokemonIds = Array.from({ length: limit }, () => Math.floor(Math.random() * 898) + 1);
  const pokemonList = await Promise.all(randomPokemonIds.map((id) => fetchPokemonDetails(id.toString())));
  return pokemonList.filter((pokemon) => pokemon !== null) as PokemonData[];
}