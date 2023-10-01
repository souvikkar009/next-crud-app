import EditTopicForm from "@components/EditTopicForm";
import React from "react";

const getTopicById = async (id) => {
    try {
        const result = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });

        if (!result.ok) {
            throw new Error("Failed to fetch topic");
        }
        return result.json();
    } catch (error) {
        console.log(error);
    }
};

const EditTopic = async ({ params }) => {
    const { id } = params;
    const { topic } = await getTopicById(id);
    const { heading, description } = topic;
    return (
        <EditTopicForm id={id} heading={heading} description={description} />
    );
};

export default EditTopic;
