import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
export const runtime = 'nodejs'
// 'edge' | 'nodejs'
export const GET = async (request, { params }) => {
    try {
        const { id }= params;
        const item = await prisma.product.findUnique({
            where: {
                id
            }
        });
        if (!item){
            NextResponse.json(
                {message: "Item not found"},
                {status: 404}
                );
        }

        return NextResponse.json({item});
    } catch(err){
        return NextResponse.json({ message: "GET Error", err}, { status: 500});
    }
}
