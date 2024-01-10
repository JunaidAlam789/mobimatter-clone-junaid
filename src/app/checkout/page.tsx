import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getFormattedProductsArray } from "@/utils/FormattedProductsArray";
import { RewardSection } from "@/views/checkoutpage/RewardSection";
import TopBar from "@/views/checkoutpage/topBar";

interface CheckoutProps {
  searchParams : {id : string}
}
export default async function Checkout({
  searchParams
}: CheckoutProps) {
  const productId = searchParams.id;
  const data = await getDynamicProducts({ productId });
  const formattedData = getFormattedProductsArray({
    products: data,
  });

  return (
    <div className="mt-10">
      <TopBar />

      {/* Reward Section */}  
      <RewardSection/>
    </div>
  );
}
