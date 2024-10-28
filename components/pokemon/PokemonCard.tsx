import Image from "next/image";
import { Pokemon, PokemonData } from "@/lib/types";
import Type from "@/components/pokemon/Type";

interface Props {
  pokemon: Pokemon;
  data: PokemonData | null;
}

const PokemonCard = ({ pokemon, data }: Props) => {
  const getPokemonNumberFromUrl = (url: string): string | null => {
    const matches = url.match(/\/(\d+)\/$/);
    return matches ? matches[1] : null;
  };

  const pokemonNumber = getPokemonNumberFromUrl(pokemon.url);
  const pokemonName = pokemon.name;


  return (
    <a href={`/pokemon/${pokemonName}`} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-shadow duration-500 hover:shadow-lg cursor-pointer">
      <div className="relative w-56 h-56">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonNumber}.png`}
          fill
          alt="pokemon image"
          className="rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      <span className="font-bold text-xl mt-4 uppercase dark:text-white text-black">
        {pokemon.name}
      </span>
      <div className="flex gap-2 mt-2">
        {data?.types &&
          data.types.map((type, index) => (
            <Type
              key={index}
              typeName={type.type.name as "fire" | "grass" | "water" | "electric" | "poison"}
            />
          ))}
      </div>
    </a>
  );
};

export default PokemonCard;