"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { usePokeAPIContext } from "@/context/pokemon-api-context";
import { useTheme } from "@/context/theme-context";
import { CSSProperties } from "react";
import Spinner from "@/components/ui/Spinner";
import Image from "next/image";
import { getPokemonImageUrl } from "@/lib/data";
import { motion } from "framer-motion";
import Pagination from "./Pagination";
import { useRouter } from 'next/navigation';

type PokemonTreeProps = {
  type: 'pokemon' | 'pokemon-species' | 'type' | 'ability';
};

const PokemonTree: React.FC<PokemonTreeProps> = ({ type }) => {
  const { pokemon, pokemonSpecies, types, abilities, error, loading, currentPage, itemsPerPage, totalPages, setCurrentPage } = usePokeAPIContext();
  const { theme } = useTheme();
  const router = useRouter();

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

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

  const handleImageClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  const getContentStyle = (): CSSProperties => ({
    background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
    boxShadow: "none",
    border: theme === "light" ? "1px solid #6366F1" : "1px solid rgba(0, 0, 0, 0.05)",
    textAlign: "left" as const,
    padding: "1.5rem 2rem",
  });

  const getContentArrowStyle = (): CSSProperties => ({
    borderRight: theme === "light"
      ? "0.4rem solid #6366F1"
      : "0.4rem solid rgba(255, 255, 255, 0.5)",
  });

  const getIconStyle = (): CSSProperties => ({
    background: theme === "light" ? "white" : "#6366F1",
    boxShadow: "0 0 0 0.2rem rgba(103, 108, 239, 0.5)",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "56px", 
    width: "56px", 
    borderRadius: "50%",
  });

  return (
    <section id="pokemon-tree" className="scroll-mt-28 mb-10 sm:mb-10">
      <SectionHeading>Pokemon Tree</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#6366F1" : "rgba(255, 255, 255, 0.5)"}>
        {currentItems.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={getContentStyle()}
            contentArrowStyle={getContentArrowStyle()}
            iconStyle={getIconStyle()} // Apply the background style without an icon
          >
            <motion.div
              whileHover={{ scale: 1.1, zIndex: 10 }}
              whileTap={{ scale: 0.9 }}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(item.id)}
            >
              {item.id && (
                <Image 
                  src={getPokemonImageUrl(item.id)} 
                  alt={item.name} 
                  className="w-24 h-24 object-cover rounded-md mb-4"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              )}
            </motion.div>
            <h3 className="text-xl font-semibold capitalize mt-4 text-center dark:text-primary">{item.name}</h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
    </section>
  );
};

export default PokemonTree;