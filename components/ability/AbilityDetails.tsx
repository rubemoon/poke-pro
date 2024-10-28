import { AbilityData } from "@/lib/types";
import Link from "next/link";
import React from "react";

interface AbilityDetailsProps {
  abilityData: AbilityData;
}

const getEnglishEffect = (abilityData: AbilityData) => {
  return abilityData.effect_entries.find(entry => entry.language.name === "en");
};

const getEnglishFlavorTexts = (abilityData: AbilityData) => {
  return abilityData.flavor_text_entries.filter(entry => entry.language.name === "en");
};

const AbilityDetails: React.FC<AbilityDetailsProps> = ({ abilityData }) => {
  const englishEffect = getEnglishEffect(abilityData);
  const englishFlavorTexts = getEnglishFlavorTexts(abilityData);

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <header className="text-center mb-6">
        <h1 className="text-4xl mb-6 font-bold text-primary dark:text-secondary">
          {abilityData.name}
        </h1>
        <div className="text-center mb-6">
        <Link href="/ability" className="inline-block bg-primary dark:bg-secondary text-white rounded-full px-4 py-2 text-sm font-semibold">
          Back to Abilities
        </Link>
      </div>
      </header>
      <article className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Effect</h2>
        <p>{englishEffect?.effect}</p>
      </article>
      <article className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Short Effect</h2>
        <p>{englishEffect?.short_effect}</p>
      </article>
      <article className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Flavor Text</h2>
        <ul>
          {englishFlavorTexts.map((entry, index) => (
            <li key={index}>
              {entry.flavor_text} (Version: {entry.version_group.name})
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default AbilityDetails;