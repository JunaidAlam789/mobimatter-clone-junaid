import Image from "next/image";
import {NextRequest, NextResponse} from 'next/server'

import { getOrderHistory } from "@/actions/getOrderHistory";


/* export interface IProductsProps {
  merchantId: string;
  uniqueId: string;
  productId: string;
  rank: number;
  productCategoryId: number;
  productFamilyId: number;
  productCategory: string;
  providerId: number;
  providerName: string;
  providerLogo: string;
  retailPrice: number;
  wholesalePrice: number;
  currencyCode: string;
  created: string;
  updated: string;
  network: string;
  regions: string[];
  countries: string[];
  productDetails: productDetails;
  product_tags: [];
  product_details: [];
}
 */
export default async function OrderHistory() {
  // console.log("Search-Params ---->" , searchParams);
    // console.log("params",params.search);
    
  //const country = params.search.replace(/%20/g, " ");
  // console.log("params" , country);

 /*  const paramCountry: string[] = [];
  paramCountry.push(country); */
  const data = await getOrderHistory();
 
   const OrdersData = data.mes?.map((item: any) => item);

   console.log(OrdersData[0])
  return (
    <div>
      <div className="relative w-full h-56">
        
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%]">
          <h2 className="text-white md:text-xl font-semibold mb-8 text-center">
              Order History
          </h2>
          <div>{OrdersData.map((order: any)=>{return(
          <div>
           <p>userid: {order.userid} orderid: {order.orderid} orderstate: {order.orderstate}
            merchantid: {order.merchantid} cost: {order.title}  title: {order.title} provider: {order.provider} </p>
            </div>)
          })}</div>

          
        </div>
      </div>

      {/* Use a conditional rendering to render ProductFilters based on whether region is true or false */}
      
    </div>
  );
}
