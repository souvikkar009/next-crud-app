"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopic = () => {
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!description || !heading) {
            alert("Heading & Descriptions are required!!!");
            return;
        }

        try {
            const result = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ heading, description }),
            });

            if (result.ok) {
                router.push("/");
                router.refresh();
            } else {
                throw new Error("Failed to create a topic!!!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    onChange={(event) => setHeading(event.target.value)}
                    value={heading}
                    type="text"
                    name="heading"
                    className="focus:outline-none text-lg px-4 py-2 w-1/2 mx-auto border border-slate-400 rounded-lg"
                    placeholder="Add Heading"
                />
                <textarea
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                    name="desciption"
                    rows={"10"}
                    className="focus:outline-none text-base px-4 py-2 w-1/2 mx-auto border border-slate-400 rounded-lg resize-none overflow-auto"
                    placeholder="Add Description"
                ></textarea>
                <button
                    type="submit"
                    className="bg-sky-400 px-8 py-2 w-1/4 mx-auto rounded-lg text-lg text-white cursor-pointer focus:outline-none"
                >
                    Add Topic
                </button>
            </form>
        </div>
    );
};

export default AddTopic;
