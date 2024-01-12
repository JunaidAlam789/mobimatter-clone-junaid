"use server"
//import {NextRequest, NextResponse} from 'next/server'
import {db , orders } from '../app/lib/drizzle'
import {v4 as uuid} from "uuid"
import { cookies } from 'next/dist/client/components/headers'
import { and, eq, param } from 'drizzle-orm'


 export const getOrderHistory = async () => {
    //const req= await request.json();  
   // const productid= request.nextUrl.searchParams.get("product_id")
   // console.log(productid,"productid")
    //console.log(req.product_id,"product_id")
try{
    let url = `http://localhost:3000/api/orderssave`
    const res = await fetch(url, {
        method: "GET",
        headers: {
          Accpet: "text/plain",
         
        },
      });
      const data = await res.json();

      return data;
}catch(error){
    throw new Error("Error in getting data");

}

} 



/* interface getCheckUsageProps {
    orderId ?: string;
}
export const getCheckUsage = async (options : getCheckUsageProps = {}) => {

    try {
        const { orderId } = options;

        let url = `https://api.mobimatter.com/mobimatter/api/v2/provider/usage/${orderId}`

        const res = await fetch(url, {
            method: "GET",
            headers: {
              Accpet: "text/plain",
              "api-key": "104883b5fe984321a2ba68470504b267",
              MerchantId: "6d58aede-871a-4556-83f0-9b0e0c31602f",
            },
          });
          const data = await res.json();

          return data;
    } catch (error) {
        throw new Error(`Unable to fetch Order Usage data!`);
    }
} */