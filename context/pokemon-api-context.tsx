"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getPokemonList, getPokemonSpeciesList, getTypeList, getAbilityList } from "@/services/pokeApi";
import { navigations } from '@/lib/data';

type PokeAPIContextProviderProps = {
  children: React.ReactNode;
};

type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};

type Category = {
  name: string;
  path: string;
  subcategories?: Category[];
};

type PokeAPIContextType = {
  pokemon: Pokemon[];
  pokemonSpecies: any[];
  types: any[];
  abilities: any[];
  fetchAllData: () => void;
  loading: boolean;
  error: string | null;
  filter: string;
  setFilter: (filter: string) => void;
  clearFilter: () => void;
  categories: Category[];
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

const PokeAPIContext = createContext<PokeAPIContextType | null>(null);

export default function PokeAPIContextProvider({
  children,
}: PokeAPIContextProviderProps) {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [pokemonSpecies, setPokemonSpecies] = useState<any[]>([]);
  const [types, setTypes] = useState<any[]>([]);
  const [abilities, setAbilities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const categories: Category[] = navigations;

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [pokemonData, speciesData, typeData, abilityData] = await Promise.all([
        getPokemonList(),
        getPokemonSpeciesList(),
        getTypeList(),
        getAbilityList()
      ]);
      setPokemon(pokemonData.results.map((p: any, index: number) => ({ ...p, id: index + 1, sprites: { front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` } })));
      setPokemonSpecies(speciesData.results);
      setTypes(typeData.results);
      setAbilities(abilityData.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const clearFilter = () => setFilter('all');

  useEffect(() => {
    fetchAllData();
  }, []);

  const totalPages = Math.ceil(pokemon.length / itemsPerPage);

  return (
    <PokeAPIContext.Provider
      value={{
        pokemon,
        pokemonSpecies,
        types,
        abilities,
        fetchAllData,
        loading,
        error,
        filter,
        setFilter,
        clearFilter,
        categories,
        currentPage,
        itemsPerPage,
        totalPages,
        setCurrentPage,
      }}
    >
      {children}
    </PokeAPIContext.Provider>
  );
}

export function usePokeAPIContext() {
  const context = useContext(PokeAPIContext);

  if (context === null) {
    throw new Error(
      "usePokeAPIContext must be used within a PokeAPIContextProvider"
    );
  }

  return context;
}