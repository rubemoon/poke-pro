import { fetchPokemonTypes } from "@/app/actions/getPokemon";
import Link from "next/link";

const TypePage = async () => {
  const types = await fetchPokemonTypes();

  if (!types.length) {
    return <div>No types found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary dark:text-secondary">
        Pokémon Types
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {types.map((type) => (
          <li key={type.name} className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link
              href={`/type/${type.name}`}
              className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {type.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypePage;