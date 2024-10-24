"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/components/pokemon/Header';
import Filters from '@/components/pokemon/Filters';
import PokemonList from '@/components/pokemon/PokemonList';
import Spinner from '@/components/Spinner';

const PokemonPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-[66rem] mx-auto px-4">
      <Header />
      <Filters type="pokemon" />
      <PokemonList type="pokemon" />
    </div>
  );
};

export default PokemonPage;