import dbConn from '@/utils/dbConn'
import Form from '@/models/form'
import { NextResponse } from 'next/server';

export async function POST(req : any , res : any){
        try {
            const body = await req.json();
            await dbConn();
            await Form.create(body);
            return NextResponse.json({ message: "Message Send Successfully!" }, { status: 200 });
        } catch (e) {
            console.error("Error in API route:", e);
            return NextResponse.json({ message: "Server error, please try again" }, { status: 500 });
        }
    }