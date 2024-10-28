import { fetchPokemonList } from "../actions/getPokemon";
import PokemonCard from "@/components/pokemon/PokemonCard";
import { Pokemon, PokemonData } from "@/lib/types";


type PokemonPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const PokemonPage = async ({ searchParams }: PokemonPageProps) => {
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined;
  const pokemonList: Pokemon[] = await fetchPokemonList({ query: search }) || [];

  const dataPromises = pokemonList.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    if (!response.ok) {
      throw new Error("failed to fetch");
    }
    const fetchedData: PokemonData = await response.json();
    return { url: pokemon.url, data: fetchedData };
  });

  const dataResults = await Promise.all(dataPromises);
  const dataMap = dataResults.reduce((acc, { url, data }) => {
    acc[url] = data;
    return acc;
  }, {} as { [url: string]: PokemonData | null });

  return (
    <div className="max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-4 text-primary text-center"> POKEMON LIST</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.url}
            pokemon={pokemon}
            data={dataMap[pokemon.url]}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;