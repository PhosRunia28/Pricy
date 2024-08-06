import { BASICPLAN, BUSINESSPLAN, PROFESSIONALPLAN } from "@/data/HostingPlans";
import CardPlan from "../common/CardPlan";

export default function MainSection() {
  return (
    <main className="container grid grid-cols-1 gap-8 pb-14 font-dmSans md:grid-cols-2 lg:grid-cols-3">
        <CardPlan card={BASICPLAN} />
        <CardPlan card={PROFESSIONALPLAN} dark />
        <CardPlan card={BUSINESSPLAN} />
      </main>
  )
}
