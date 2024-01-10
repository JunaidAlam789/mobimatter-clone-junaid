import { getDynamicProducts } from "@/actions/getDynamicProducts";
import { getFormattedProductsArray } from "@/utils/FormattedProductsArray";
import OrderInfoCard from "@/views/checkoutpage/orderInfoCard";
import TopBar from "@/views/checkoutpage/topBar";

export default async function Checkout({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const productId = searchParams.id;
  const data = await getDynamicProducts({ productId });
  const formattedData = getFormattedProductsArray({
    products: data,
  });

  return (
    <div>
      <TopBar />
      <OrderInfoCard data={formattedData} />
    </div>
  );
}
