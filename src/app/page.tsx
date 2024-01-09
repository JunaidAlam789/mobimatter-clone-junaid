import { NavigationButtons } from "@/components/TelecomBrands/NavigationButtons";
import { HeroSection } from "@/views/homepage/HeroSection";
import { PromotionCards } from "@/views/homepage/PromotionCards";
import EsimOffers from "@/views/homepage/esimOffers";
import HowItWorks from "@/views/homepage/howItWorks";
import { PopularCountries } from "@/views/homepage/popularCountries";
import topupIcon from "../../public/navbar/topupColored.svg";
export default async function Home() {
  return (
    <>
      <HeroSection />
      <PopularCountries />
      <NavigationButtons
        maxWidth={"1200px"}
        className="text-lg"
        leftBtnText="Top up"
        leftBtnHref="/topup"
        leftBtnIcon={topupIcon}
      />
      <EsimOffers />
      <PromotionCards />
      <HowItWorks />
    </>
  );
}
