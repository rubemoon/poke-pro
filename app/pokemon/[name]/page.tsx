import { fetchPokemonDetails } from "@/app/actions/getPokemon";
import PokemonDetails from "@/components/pokemon/pokemonDetails";

interface PokemonPageProps {
  params: {
    name: string;
  };
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const pokemonData = await fetchPokemonDetails(params.name);

  if (!pokemonData) {
    return <div>Pokemon not found</div>;
  }

  return <PokemonDetails pokemonData={pokemonData} />;
}