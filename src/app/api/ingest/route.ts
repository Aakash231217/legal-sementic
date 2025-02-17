import { NextRequest, NextResponse } from "next/server";
import { handleBootstrapping } from "../../services/bootstrap";
export const maxDuration = 300;
export async function POST(req:NextRequest){
    const {targetIndex} = await req.json();
    //handle bootstrapping
    await handleBootstrapping(targetIndex);
    //return nextresponse
    return NextResponse.json({success:true},{status:200});

}