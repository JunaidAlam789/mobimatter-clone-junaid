import { getCountriesData } from "@/utils/getCountriesdata";
import { HeroSection } from "@/views/homepage/HeroSection";
import { PromotionCards } from "@/views/homepage/PromotionCards";
import { PopularCountries } from "@/views/homepage/popularCountries";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <PopularCountries />
      <PromotionCards />
    </>
  );
}
