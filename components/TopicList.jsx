import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

const getTopics = async () => {
    try {
        const result = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if (!result.ok) {
            console.log("Failed to store data!!!");
        }
        return result.json();
    } catch (error) {
        console.log(error);
    }
};

const TopicList = async () => {
    const { topics } = await getTopics();
    return (
        <>
            {topics.map((topic) => (
                <div className=" bg-gray-100 p-6 rounded-lg my-4 flex items-center justify-between">
                    <div className="flex flex-col w-5/6">
                        <div className="text-3xl mb-2">{topic.heading}</div>
                        <div className="text-lg">{topic.description}</div>
                    </div>
                    <div className="flex w-1/6 justify-evenly">
                        <RemoveBtn id={topic._id} />
                        <Link href={`/edittopic/${topic._id}`}>
                            <FiEdit className="text-2xl cursor-pointer text-black" />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TopicList;
