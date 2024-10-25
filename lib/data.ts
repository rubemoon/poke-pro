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
];

export const navigations = [
  {
    name: 'Home',
    path: '/',
  },

  {
    name: 'Documentation',
    target: '_blank',
    path: 'https://pokeapi.co/docs/v2',
    external: true,
  },
];