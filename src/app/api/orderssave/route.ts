import {NextRequest, NextResponse} from 'next/server'
import {db , orders } from '../../lib/drizzle'
import {v4 as uuid} from "uuid"
import { cookies } from 'next/dist/client/components/headers'
import { and, eq, param } from 'drizzle-orm'


 export const GET = async (request: NextRequest) => {
    //const req= await request.json();  
   // const productid= request.nextUrl.searchParams.get("product_id")
   // console.log(productid,"productid")
    //console.log(req.product_id,"product_id")
try{
    const res= await db.select().from(orders)
 /* const res= await db.insert(cartTable).values({
    user_id: "user123",
    product_id: "prod123",
    quantity: 2
})  */
//console.log(res, "orders")
//console.log(res[0].productid,"get queryy")
return NextResponse.json({'mes': res})
}catch(error){
    return NextResponse.json({'mes': error})

}

} 
/*
export const POST = async (request: NextRequest) => {
    const req= await request.json();
    const uid= uuid();
    const setCookies= cookies();
    if(!cookies().get("user_id")?.value){
        setCookies.set("user_id", uid)
        
    }
    

      const userid= cookies().get("user_id")?.value
      console.log(userid,"post cartaddupdate")
    try{
        const res1= await db.select().from(orders).where(and (eq(orders.productid, req.productid),eq(orders.userid, `${userid}`)) )
        if ( !res1.length){
        const res2= await db.insert(orders).values({
             userid: setCookies.get("userid")?.value as string, 
            productid: req.productid? req.productid:"pr_12345",
            
            title: req.title? req.title:"Product title",
            price: req.price,
           
              
        }).returning()}
        return NextResponse.json({'mes': {res1}})
    }catch(error){
        return NextResponse.json({'mes': error})
    
    }
    
}
  */
 /* export const PUT = async (request: NextRequest) => {
    const req= await request.json();
    
    const uid= uuid();
    const setCookies= cookies();
    if(!cookies().get("user_id")?.value){
        setCookies.set("user_id", uid)
    }
    //const userid= cookies().get("user_id")?.value
    const userid=cookies().get("user_id")?.value
      console.log(userid,"put cartaddupdate")
    console.log(req.product_id, "req console")
    try{ 
        const res3= await db.select().from(orders).where(and(eq(orders.productid, req.product_id), eq(cartTable.user_id, `${userid}`)) )
        if(res3.length){
        const res4=await db.update(orders).set({quantity: req.quantity + res3[0].quantity }).where(and(eq(cartTable.product_id, req.product_id), eq(cartTable.user_id, `${userid}`))).returning();  
        }
        
       
        
        
    
    console.log(req.quantity,"req_quantity")
    console.log(res3[0].quantity,"res_0_quanitity")
   // console.log(res)
    return NextResponse.json({res: res3})
    }catch(error){
        return NextResponse.json({res: error})
    
    }
    
}  */