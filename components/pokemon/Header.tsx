import React, { useState } from 'react';
import { usePokeAPIContext } from '@/context/pokemon-api-context';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const { setFilter } = usePokeAPIContext();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search.trim()) {
      const searchTerm = search.trim().toLowerCase();
      setFilter(searchTerm);
      setSearch('');
    }
  };

  return (
    <header className="mb-8 flex flex-col items-center">
      <div className="w-full relative mb-4">
        <input
          className="new-search w-full text-black dark:text-black p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Search Pokémon by ID or Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;