import {NextResponse} from 'next/server';
import { initiateBootstrapping } from '../../services/bootstrap';

export const maxDuration = 300;
export async function POST (){
    //Initiate bootstrapping
    await initiateBootstrapping(process.env.PINECONE_INDEX as string);
//return nextresponse
return NextResponse.json({success:true},{status:200})
}