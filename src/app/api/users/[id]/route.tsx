import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET =async (req: Request, 
    { params }: { params: {id: string}})=>{
    try {
        
        const user = await prisma.user.findFirst({
            where: {
                id: params.id
            }
        });
        if (!user){
            NextResponse.json(
                {message: "user not found"},
                {status: 404}
                );
        }

        return NextResponse.json(user);
    } catch(err){
        return NextResponse.json({ message: "GET Error", err}, { status: 500});
    }
}
export const PUT= async (req: Request, 
    { params }: { params: {id: string}}
    )=>{
    try {
        //@ts-ignore
        const { user }= await req.json();
        
        const updatedUser= await prisma.user.update({
            data: { user },
            where: { id: params.id },
        });

        return NextResponse.json({ user: updatedUser }, { status: 200 } )
        
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 500 } )
        
    } 
}

export const DELETE= async (req: Request, 
    { params }: { params: {id: string}})=>{
    try {
        
        const user= await prisma.user.delete({
            where: {
                id: params.id
            }
        });

        return NextResponse.json({ user }, { status: 200 } )
        
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 500 } )
        
    } 
}
