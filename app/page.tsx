import { Suspense } from "react";
import { fetchRandomPokemon } from "@/app/actions/getPokemon";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/ui/loading";

const HomePage = async () => {
  const randomPokemon = await fetchRandomPokemon(6);

  return (
    <Suspense fallback={<Loading />}>
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary dark:text-secondary">
          Random Pokémon
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {randomPokemon.map((pokemon) => (
            <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-shadow duration-500 hover:shadow-lg cursor-pointer">
                <div className="relative w-32 h-32">
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
                    fill
                    alt={pokemon.name}
                    className="rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className="font-bold text-xl mt-4 uppercase dark:text-white text-black">
                  {pokemon.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;