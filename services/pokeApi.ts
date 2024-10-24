import { BASE_URL } from '@/lib/data';

export const getPokemonById = async (id: string) => {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
    }
    return response.json();
};

export const getPokemonList = async () => {
    const response = await fetch(`${BASE_URL}/pokemon?limit=100000&offset=0`);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon list');
    }
    return response.json();
};

export const getPokemonSpeciesList = async () => {
    const response = await fetch(`${BASE_URL}/pokemon-species?limit=100000&offset=0`);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon species list');
    }
    return response.json();
};

export const getTypeList = async () => {
    const response = await fetch(`${BASE_URL}/type`);
    if (!response.ok) {
        throw new Error('Failed to fetch types list');
    }
    return response.json();
};

export const getAbilityList = async () => {
    const response = await fetch(`${BASE_URL}/ability?limit=100000&offset=0`);
    if (!response.ok) {
        throw new Error('Failed to fetch abilities list');
    }
    return response.json();
};