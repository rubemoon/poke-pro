import React from 'react';
import { usePokeAPIContext } from '@/context/pokemon-api-context';
import PokemonItem from './PokemonItem';
import { AnimatePresence, motion } from 'framer-motion';
import Spinner from '@/components/ui/Spinner'; 
import Pagination from './Pagination';

type PokemonListProps = {
  type: 'pokemon' | 'pokemon-species' | 'type' | 'ability';
};

const PokemonList: React.FC<PokemonListProps> = ({ type }) => {
  const { pokemon, pokemonSpecies, types, abilities, error, loading, filter, currentPage, itemsPerPage, totalPages, setCurrentPage } = usePokeAPIContext();

  if (loading) return <Spinner />; 
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  let items = [];
  if (type === 'pokemon') {
    items = pokemon;
  } else if (type === 'pokemon-species') {
    items = pokemonSpecies;
  } else if (type === 'type') {
    items = types;
  } else if (type === 'ability') {
    items = abilities;
  }

  const filteredItems = filter === 'all' ? items : items.filter(item => item.name.includes(filter));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <motion.ul
        className="pokemon-list space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence>
          {currentItems.map(item => (
            <PokemonItem key={item.name} pokemon={item} />
          ))}
        </AnimatePresence>
      </motion.ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </div>
  );
};

export default PokemonList;