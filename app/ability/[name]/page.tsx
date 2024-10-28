import { fetchAbility } from "@/app/actions/getPokemon";
import AbilityDetails from "@/components/ability/AbilityDetails";

interface AbilityPageProps {
  params: {
    id: string;
    name: string;
  };
}

const AbilityPage = async ({ params }: AbilityPageProps) => {
  const abilityData = await fetchAbility(params.name);
  if (!abilityData) {
    return <div>Ability not found</div>;
  }

  return <AbilityDetails abilityData={abilityData} />;
};

export default AbilityPage;