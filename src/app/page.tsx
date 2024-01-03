import { HeroSection } from "@/views/homepage/HeroSection";
import { PromotionCards } from "@/views/homepage/PromotionCards";
import EsimOffers from "@/views/homepage/esimOffers";
import HowItWorks from "@/views/homepage/howItWorks";
import { PopularCountries } from "@/views/homepage/popularCountries";

export default async function Home() {
  return (
    <>  
      <HeroSection />
      <PopularCountries />
      <EsimOffers />
      <PromotionCards />
      <HowItWorks />
    </>
  );
}
