import { fetchPokemon } from "./actions/getPokemon";
import PokemonTreeClient from "@/components/pokemon/PokemonTree";

const HomePage = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  const search =
    typeof searchParams.search === "string"
      ? searchParams.search
      : undefined;

  const pokemon = await fetchPokemon({ search });

  const theme = "light"; 
  const error = null;

  return (
    <div className="max-w-4xl mx-auto">
      <PokemonTreeClient
        type="pokemon"
        items={pokemon}
        theme={theme}
        error={error}
      />
    </div>
  );
};

export default HomePage;