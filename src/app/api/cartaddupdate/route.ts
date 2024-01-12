import {NextRequest, NextResponse} from 'next/server'
import {db , cartTable } from '../../lib/drizzle'
import {v4 as uuid} from "uuid"
import { cookies } from 'next/dist/client/components/headers'
import { and, eq, param } from 'drizzle-orm'


 export const GET = async (request: NextRequest) => {
    //const req= await request.json();  
   // const productid= request.nextUrl.searchParams.get("product_id")
   // console.log(productid,"productid")
    //console.log(req.product_id,"product_id")
try{
    const res= await db.select().from(cartTable)
 /* const res= await db.insert(cartTable).values({
    user_id: "user123",
    product_id: "prod123",
    quantity: 2
})  */
console.log(res[0].product_id,"get queryy")
return NextResponse.json({'mes': res})
}catch(error){
    return NextResponse.json({'mes': error})

}

} 

export const POST = async (request: NextRequest) => {
    const req= await request.json();
    const uid= uuid();
    const setCookies= cookies();
    if(!cookies().get("user_id")?.value){
        setCookies.set("user_id", uid)
        /* cookies().set({
            name: 'user_id',
            value: uid,
            expires: new Date('2023-06-26'),
            path: '/', // For all paths
          }) */
    }
    
    /* UPDATE  cart
SET quantity = 7
WHERE id = 223 */
      const userid= cookies().get("user_id")?.value
      console.log(userid,"post cartaddupdate")
    try{
        const res1= await db.select().from(cartTable).where(and (eq(cartTable.product_id, req.product_id),eq(cartTable.user_id, `${userid}`)) )
        if ( !res1.length){
        const res2= await db.insert(cartTable).values({
            user_id: setCookies.get("user_id")?.value as string,
            product_id: req.product_id? req.product_id:"pr_12345",
            quantity: 0,      //quantity: req.quantity,
            title: req.title? req.title:"Product title",
            price: req.price,
            imagename: req.imagename,
            size: req.size? req.size:"Small",
            color: req.color? req.color:"White"
              
        }).returning()}
        return NextResponse.json({'mes': {res1}})
    }catch(error){
        return NextResponse.json({'mes': error})
    
    }
    
}
 /* UPDATE  cart
SET quantity = 7
WHERE id = 223 */
 export const PUT = async (request: NextRequest) => {
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
        const res3= await db.select().from(cartTable).where(and(eq(cartTable.product_id, req.product_id), eq(cartTable.user_id, `${userid}`)) )
        if(res3.length){
        const res4=await db.update(cartTable).set({quantity: req.quantity + res3[0].quantity }).where(and(eq(cartTable.product_id, req.product_id), eq(cartTable.user_id, `${userid}`))).returning();  
        }
        
       
        
        
    
    console.log(req.quantity,"req_quantity")
    console.log(res3[0].quantity,"res_0_quanitity")
   // console.log(res)
    return NextResponse.json({res: res3})
    }catch(error){
        return NextResponse.json({res: error})
    
    }
    
} 