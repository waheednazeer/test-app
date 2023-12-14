import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const {image, title, price, category, description} = body;

        const newItem = await prisma.product.create({
            data: {
                image, title, price, category, description
            }
        })

        return NextResponse.json({newItem});
    } catch(err){
        return NextResponse.json({ message: "P0ST Error", err}, { status: 500});
    }
}


export const GET = async () => {
    try {
        const Items = await prisma.product.findMany();

        return NextResponse.json(Items);
    } catch(err){
        return NextResponse.json({ message: "GET Error", err}, { status: 500});
    }
}
