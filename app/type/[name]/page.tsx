import { fetchPokemonType } from "@/app/actions/getPokemon";
import TypeDetails from "@/components/type/TypeDetails";

interface TypePageProps {
  params: {
    name: string;
  };
}

const TypePage = async ({ params }: TypePageProps) => {
  const typeData = await fetchPokemonType(params.name);

  if (!typeData) {
    return <div>Type not found</div>;
  }

  return <TypeDetails typeData={typeData} />;
};

export default TypePage;