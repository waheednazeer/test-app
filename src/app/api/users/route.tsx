import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();
        const { username, password, email, address } = body;

        const newUser = await prisma.user.create({
            data: {
                username, 
                password, 
                email, 
                address,   
            }
        })

        return NextResponse.json(newUser);
    } catch(err){
        return NextResponse.json({ message: "P0ST Error", err}, { status: 500});
    }
}


export const GET = async () => {
    try {
        const users = await prisma.user.findMany();

        return NextResponse.json(users);
    } catch(err){
        return NextResponse.json({ message: "GET Error", err}, { status: 500});
    }
}
