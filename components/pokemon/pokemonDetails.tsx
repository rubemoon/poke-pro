import { PokemonData } from "@/lib/types";
import Link from "next/link";

interface PokemonDetailsProps {
  pokemonData: PokemonData;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonData }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary dark:text-secondary">
        {pokemonData.name}
      </h1>
      <div className="text-center mb-6">
        <Link href="/pokemon" className="inline-block bg-primary dark:bg-secondary text-white rounded-full px-4 py-2 text-sm font-semibold">
          Back to Pokémon
        </Link>
      </div>
      <div className="flex flex-col items-center mb-6">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
          alt={pokemonData.name}
          className="w-48 h-48 mb-4"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <audio controls className="mt-4">
            <source src={pokemonData.cries.latest} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls className="mt-4">
            <source src={pokemonData.cries.legacy} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Height</p>
          <p>{pokemonData.height}</p>
        </div>
        <div className="bg-muted dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Weight</p>
          <p>{pokemonData.weight}</p>
        </div>
        <div className="bg-muted dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Base Experience</p>
          <p>{pokemonData.base_experience}</p>
        </div>
        <div className="bg-muted dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Abilities</p>
          <p>{pokemonData.abilities.map((ability, index) => (
            <Link
              key={index}
              href={`/ability/${ability.ability.name}`}
              className="inline-block bg-accent dark:bg-indigo-500 text-indigo-800 dark:text-indigo-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {ability.ability.name}
            </Link>
          ))}</p>
        </div>
        <div className="bg-muted dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Types</p>
          <p>{pokemonData.types.map((type, index) => (
            <Link
              key={index}
              href={`/type/${type.type.name}`}
              className="inline-block bg-success dark:bg-green-500 text-green-800 dark:text-green-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {type.type.name}
            </Link>
          ))}</p>
        </div>
        <div className="bg-muted dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-lg font-semibold mb-2">Forms</p>
          <p>{pokemonData.forms.map((form, index) => (
            <span key={index} className="inline-block bg-warning dark:bg-yellow-500 text-yellow-800 dark:text-yellow-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              {form.name}
            </span>
          ))}</p>
        </div>
        <div className="bg-muted dark:bg-gray-700 p-4 rounded-lg shadow-md md:col-span-2">
          <p className="text-lg font-semibold mb-2">Moves</p>
          <p>{pokemonData.moves.map((move, index) => (
            <span key={index} className="inline-block bg-info dark:bg-blue-500 text-blue-800 dark:text-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              {move.move.name}
            </span>
          ))}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
