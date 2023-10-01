"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, heading, description }) => {
    const [newHeading, setNewHeading] = useState(heading);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await fetch(
                `http://localhost:3000/api/topics/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "applicatio/json",
                    },
                    body: JSON.stringify({ newHeading, newDescription }),
                }
            );
            if (result.ok) {
                router.push("/");
                router.refresh();
            } else {
                throw new Error("Failed to Update!!!");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    onChange={(e) => setNewHeading(e.target.value)}
                    value={newHeading}
                    type="text"
                    className="focus:outline-none text-lg px-4 py-2 w-1/2 mx-auto border border-slate-400 rounded-lg"
                />
                <textarea
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    rows={"10"}
                    className="focus:outline-none text-base px-4 py-2 w-1/2 mx-auto border border-slate-400 rounded-lg resize-none overflow-auto"
                ></textarea>
                <input
                    type="submit"
                    value="Update Topic"
                    className="bg-sky-400 px-8 py-2 w-1/4 mx-auto rounded-lg text-lg text-white cursor-pointer"
                />
            </form>
        </div>
    );
};

export default EditTopicForm;
