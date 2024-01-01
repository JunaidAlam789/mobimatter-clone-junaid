import { HeroSection } from "@/views/homepage/HeroSection";
import { PopularCountries } from "@/views/homepage/popularCountries";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <PopularCountries />
    </main>
  );
}
