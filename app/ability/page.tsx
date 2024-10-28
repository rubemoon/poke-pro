import { fetchAbilities } from "@/app/actions/getPokemon";
import Link from "next/link";

const AbilityPage = async () => {
  const abilities = await fetchAbilities();

  if (!abilities.length) {
    return <div>No abilities found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary dark:text-secondary">
        Pokémon Abilities
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {abilities.map((ability) => (
          <li key={ability.name} className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <Link
              href={`/ability/${ability.name}`}
              className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {ability.name}
            </Link>
            <article className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {ability.effect}
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbilityPage;