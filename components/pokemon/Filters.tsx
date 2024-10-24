import React from 'react';
import { usePokeAPIContext } from '@/context/pokemon-api-context';

type FiltersProps = {
  type: 'pokemon' | 'pokemon-species' | 'type' | 'ability';
};

const Filters: React.FC<FiltersProps> = ({ type }) => {
  const { filter, setFilter, clearFilter } = usePokeAPIContext();

  const filterOptions = {
    pokemon: ['all', 'fire'],
    'pokemon-species': ['all', 'legendary'],
    type: ['all', 'physical'],
    ability: ['all', 'offensive'],
  };

  return (
    <section className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-8">
      <span className="filter-count text-gray-700">
        <strong>Filter:</strong> {filter}
      </span>
      <ul className="filters flex space-x-4">
        {filterOptions[type].map((option) => (
          <li key={option}>
            <button
              className={`px-3 py-1 rounded ${
                filter === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setFilter(option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="clear-filter bg-red-500 text-white px-3 py-1 rounded"
        onClick={clearFilter}
      >
        Clear Filter
      </button>
    </section>
  );
};

export default Filters;