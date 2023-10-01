import mongoose, { Schema } from "mongoose";

const topicSchemea = new Schema(
    {
        heading: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchemea);
export default Topic;
