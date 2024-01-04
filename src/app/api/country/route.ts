
import { NextResponse ,  NextRequest } from "next/server";

export async function POST( request : NextRequest ) {
    try {
        const body = await request.json();

        const { country } = body;

        if( !country ) {
            return NextResponse.json({ error: 'Country is required' },{status : 400});
        }

        return NextResponse.json({ country });

        // https://api.mobimatter.com/mobimatter/api/v2/products

        // const res = await fetch(`https://api.mobimatter.com/mobimatter/api/v2/products?country=${country}`, {
        //     method: 'GET',
        //     headers : {
        //         "Accpet" : "text/plain",
        //         'api-key': "104883b5fe984321a2ba68470504b267",
        //         "MerchantId" : "6d58aede-871a-4556-83f0-9b0e0c31602f",
        //     }
        // });

        // const data : any = res.json();

        // return NextResponse.json(data.result);
        
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({ error: 'Something went wrong' },{status : 500});
    }
}