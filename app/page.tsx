import Navbar from "@/components/Navbar";
import ShowcaseHero from "@/components/ShowcaseHero";
import CarShowcaseGrid from "@/components/CarShowcaseGrid";
import TechInsights from "@/components/TechInsights";
import CompareHub from "@/components/CompareHub";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950">
      <ShowcaseHero />
      <CarShowcaseGrid limit={2}/>
      <TechInsights />
      <CompareHub />
    </main>
  );
}