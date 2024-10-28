import { PokemonType } from "@/lib/types";
import Link from "next/link";

interface TypeDetailsProps {
  typeData: PokemonType;
}

const TypeDetails: React.FC<TypeDetailsProps> = ({ typeData }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-background dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary dark:text-secondary capitalize">
          {typeData.name}
        </h1>
        <Link href="/type" className="inline-block bg-primary dark:bg-secondary text-white rounded-full px-4 py-2 text-sm font-semibold">
          Back to Types
        </Link>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-muted">Damage Relations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-info">Double Damage From</h3>
            <ul className="list-disc list-inside">
              {typeData.damage_relations.double_damage_from.map((type) => (
                <li key={type.name} className="text-foreground dark:text-muted capitalize">{type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-info">Double Damage To</h3>
            <ul className="list-disc list-inside">
              {typeData.damage_relations.double_damage_to.map((type) => (
                <li key={type.name} className="text-foreground dark:text-muted capitalize">{type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-warning">Half Damage From</h3>
            <ul className="list-disc list-inside">
              {typeData.damage_relations.half_damage_from.map((type) => (
                <li key={type.name} className="text-foreground dark:text-muted capitalize">{type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-warning">Half Damage To</h3>
            <ul className="list-disc list-inside">
              {typeData.damage_relations.half_damage_to.map((type) => (
                <li key={type.name} className="text-foreground dark:text-muted capitalize">{type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-danger">No Damage From</h3>
            <ul className="list-disc list-inside">
              {typeData.damage_relations.no_damage_from.map((type) => (
                <li key={type.name} className="text-foreground dark:text-muted capitalize">{type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-danger">No Damage To</h3>
            <ul className="list-disc list-inside">
              {typeData.damage_relations.no_damage_to.map((type) => (
                <li key={type.name} className="text-foreground dark:text-muted capitalize">{type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-muted">Moves</h2>
        <ul className="list-disc list-inside">
          {typeData.moves.map((move) => (
            <li key={move.name} className="text-foreground dark:text-muted capitalize">{move.name}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-muted">Game Indices</h2>
        <ul className="list-disc list-inside">
          {typeData.game_indices.map((index) => (
            <li key={index.generation.name} className="text-foreground dark:text-muted capitalize">
              {index.generation.name} - {index.game_index}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TypeDetails;