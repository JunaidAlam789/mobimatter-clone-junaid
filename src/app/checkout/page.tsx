import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getFormattedProductsArray } from "@/utils/FormattedProductsArray";
import OrderInfoCard from "@/views/checkoutpage/orderInfoCard";
import TopBar from "@/views/checkoutpage/topBar";
import { RewardSection } from "@/views/checkoutpage/RewardSection";

interface CheckoutProps {
  searchParams: { id: string };
}
export default async function Checkout({ searchParams }: CheckoutProps) {
  const productId = searchParams.id;
  const data = await getDynamicProducts({ productId });
  const formattedData = getFormattedProductsArray({
    products: data,
  });

  return (
    <div>
      <TopBar />
      <OrderInfoCard data={formattedData} />

      {/* Reward Section */}
      <RewardSection />
    </div>
  );
}
