import { getSeoMetadata } from "@/lib/seo";
import logo from '@/public/logo.svg';

export const Logo = logo;
export const APP_NAME = 'Poke Pro';
export const AUTHOR = 'Rubens Jean Simon';
export const BASE_URL = 'https://pokeapi.co/api/v2';
export const MY_GITHUB_REPO = 'https://github.com/rubemoon/poke-pro';
export const COPYRIGHT_YEAR = new Date().getFullYear();
export const AUTHOR_URL = 'https://brand.kozenetpro.com';
export const POKE_API_URL = 'https://pokeapi.co';

export const getPokemonImageUrl = (id: number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

export const metadata = getSeoMetadata(
  "Pokémon Explorer | Discover and Explore Pokémon",
  "A comprehensive app to explore and learn about different Pokémon, their stats, abilities, and more.",
  "Pokémon, explore, stats, abilities, evolutions, team builder",
  "https://poke.kozenetpro.com"
);

export const links = [
  {
    name: 'Home',
    hash: "#home",
  },
  {
    name: 'Pokémon',
    hash: "#pokemon",
    subcategories: [
      { name: 'All Pokémon', hash: "#all-pokemon" },
      { name: 'Ditto', hash: "#ditto" },
      // { name: 'Aegislash', hash: "#aegislash" },
    ],
  },
];

export const navigations = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Pokémon',
    path: '/',
    subcategories: [
      { name: 'All Pokémon', path: '/pokemon?limit=100000&offset=0' },
      { name: 'Ditto', path: '/pokemon/ditto' },
      // { name: 'Aegislash', path: '/pokemon-species/aegislash' },
    ],
  },
  // eu comentei essas duas categorias para não aparecer no menu
  // porque eu não terminei de implementar essas funcionalidades ainda
  // {
  //   name: 'Types',
  //   path: '/type',
  //   subcategories: [
  //     { name: 'Type 3', path: '/type/3' },
  //   ],
  // },
  // {
  //   name: 'Abilities',
  //   path: '/ability',
  //   subcategories: [
  //     { name: 'Battle Armor', path: '/ability/battle-armor' },
  //   ],
  // },
  {
    name: 'Documentation',
    path: 'https://pokeapi.co/docs/v2',
    external: true,
  },
];