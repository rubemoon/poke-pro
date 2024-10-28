export const APP_NAME = 'Poke Pro';
export const AUTHOR = 'Rubens Jean Simon';
export const BASE_URL = 'https://pokeapi.co/api/v2';
export const MY_GITHUB_REPO = 'https://github.com/rubemoon/poke-pro';
export const AUTHOR_URL = 'https://brand.kozenetpro.com';
export const POKE_API_URL = 'https://pokeapi.co';
export const COPYRIGHT_YEAR = new Date().getFullYear();

export const NAVIGATIONS = [
  { name: 'Home', path: '/' },
  { name: 'Pokémon', path: '/pokemon', subcategories: [{ name: 'All Pokémon', path: '/pokemon' }, { name: 'Ditto', path: '/pokemon/ditto' }, { name: 'Aegislash', path: '/pokemon-species/aegislash' }] },
  { name: 'Types', path: '/type', subcategories: [{ name: 'Type 3', path: '/type/3' }] },
  { name: 'Abilities', path: '/ability', subcategories: [{ name: 'Battle Armor', path: '/ability/battle-armor' }] },
  { name: 'Documentation', path: 'https://pokeapi.co/docs/v2', external: true },
];
