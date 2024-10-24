"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPokemonById } from '@/services/pokeApi';
import Spinner from '@/components/ui/Spinner'; 
import { Pokemon } from '@/lib/types'; 
import { motion } from 'framer-motion';
import Draggable from 'react-draggable';

const PokemonPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id && typeof id === 'string') {
      getPokemonById(id)
        .then(data => {
          setPokemon(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  const handleNext = () => {
    if (id && typeof id === 'string') {
      const nextId = parseInt(id) + 1;
      router.push(`/pokemon/${nextId}`);
    }
  };

  const handlePrev = () => {
    if (id && typeof id === 'string') {
      const prevId = parseInt(id) - 1;
      if (prevId > 0) {
        router.push(`/pokemon/${prevId}`);
      }
    }
  };

  if (loading) {
    return <Spinner />; 
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!pokemon) {
    return <div className="text-center">No Pokémon data</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">{pokemon.name}</h1>
      <Draggable>
        <motion.img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name} 
          className="w-48 h-48 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </Draggable>
      <ul className="list-none p-0">
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="my-2">{ability.ability.name}</li>
        ))}
      </ul>
      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handlePrev}
        >
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleNext}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default PokemonPage;