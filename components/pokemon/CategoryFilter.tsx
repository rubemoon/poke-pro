import React from 'react';
import { usePokeAPIContext } from '@/context/pokemon-api-context';
import { navigations } from '@/lib/data';

type CategoryFilterProps = {
  type: 'pokemon' | 'pokemon-species' | 'type' | 'ability';
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ type }) => {
  const { setFilter } = usePokeAPIContext();

  const filteredCategories = navigations.filter(category => {
    if (type === 'pokemon') {
      return category.path.startsWith('/pokemon');
    } else if (type === 'pokemon-species') {
      return category.path.startsWith('/pokemon-species');
    } else if (type === 'type') {
      return category.path.startsWith('/type');
    } else if (type === 'ability') {
      return category.path.startsWith('/ability');
    }
    return false;
  });

  return (
    <section className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md mb-8">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {filteredCategories.map((category) => (
          <li key={category.name}>
            <button
              className="text-blue-500"
              onClick={() => setFilter(category.path)}
            >
              {category.name}
            </button>
            {category.subcategories && (
              <ul className="ml-4 space-y-1">
                {category.subcategories.map((sub) => (
                  <li key={sub.name}>
                    <button
                      className="text-gray-700"
                      onClick={() => setFilter(sub.path)}
                    >
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryFilter;