import { HeroSection } from "@/views/homepage/HeroSection";
import EsimOffers from "@/views/homepage/esimOffers";
import { PopularCountries } from "@/views/homepage/popularCountries";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <PopularCountries />
      <EsimOffers />
    </main>
  );
}
