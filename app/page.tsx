"use client";
import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner"; 
import PokemonTree from "@/components/pokemon/PokemonTree";

function HomePage() {
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
    <div className="max-w-4xl mx-auto">
      <PokemonTree type={"pokemon"}  />
    </div>
  );
}

export default HomePage;