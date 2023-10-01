import connectDB from "@utils/mongodb";
import Topic from "@models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newHeading: heading, newDescription: description } =
        await request.json();
    await connectDB();
    await Topic.findByIdAndUpdate(id, { heading, description });
    return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
}
