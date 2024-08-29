import connectMongo from "../../../libs/mongodb";
import Topic from "../../../model/index";
import {NextResponse} from 'next/server';
export async function POST(req){
    const {title,description} = await req.json();
    await connectMongo();
    await Topic.create({title,description});
    return NextResponse.json({message:'Topic created'},{status:201});
}
export async function GET(){
    await connectMongo();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}
export async function DELETE(req){
    const id=req.nextUrl.searchParams.get('id');
    await connectMongo();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:'Topic deleted'},{status:200});
}