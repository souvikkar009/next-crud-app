import connectDB from "@utils/mongodb";
import Topic from "@models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { heading, description } = await request.json();
    await connectDB();
    await Topic.create({ heading, description });
    return NextResponse.json({ message: "Topic Created!!!" }, { status: 201 });
}

export async function GET() {
    await connectDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Topic.findByIdAndRemove(id);
    return NextResponse.json({ message: "Topic Deleted!!!" }, { status: 200 });
} 