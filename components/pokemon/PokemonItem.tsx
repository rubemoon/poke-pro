import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getPokemonImageUrl } from '@/lib/data';

interface PokemonItemProps {
  pokemon: {
    id: number;
    name: string;
  };
}

const PokemonItem: React.FC<PokemonItemProps> = React.memo(({ pokemon }) => {
  const imageUrl = getPokemonImageUrl(pokemon.id);

  return (
    <motion.li
      className="pokemon-item p-4 rounded-lg shadow-md mb-4 bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      layout
    >
      <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
        <a className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={imageUrl} alt={pokemon.name} width={64} height={64} className="mr-4" />
            <label className="text-lg font-bold uppercase text-black">
              {pokemon.name}
            </label>
          </div>
        </a>
      </Link>
    </motion.li>
  );
});

PokemonItem.displayName = 'PokemonItem';

export default PokemonItem;