"use client";

import React, { CSSProperties } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PokemonCard, { Pokemon } from "@/components/pokemon/PokemonCard";
import Search from "@/components/pokemon/Search";

type PokemonTreeProps = {
  type: 'pokemon' | 'pokemon-species' | 'type' | 'ability';
  items: Pokemon[];
  theme: 'light' | 'dark';
  error: string | null;
  search?: string; 
};

const PokemonTree: React.FC<PokemonTreeProps> = ({
  items = [], 
  theme,
  error,
  search, 
}) => {
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const getContentStyle = (): CSSProperties => ({
    background: "var(--bg-light)",
    boxShadow: "none",
    border: "var(--border-light)",
    textAlign: "left" as const,
    padding: "1.5rem 2rem",
  });

  const getContentArrowStyle = (): CSSProperties => ({
    borderRight: "var(--arrow-light)",
  });

  const getIconStyle = (): CSSProperties => ({
    background: "var(--icon-bg-light)",
    boxShadow: "var(--icon-shadow-light)",
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
      <Search search={search} /> 
      <VerticalTimeline lineColor={theme === "light" ? "#6366F1" : "rgba(255, 255, 255, 0.5)"}>
        {items.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={getContentStyle()}
            contentArrowStyle={getContentArrowStyle()}
            iconStyle={getIconStyle()} 
          >
            <PokemonCard pokemon={item} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default PokemonTree;