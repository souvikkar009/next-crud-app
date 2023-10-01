"use client";

import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are You Sure?");
        let res;
        if (confirmed) {
            let res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <RiDeleteBinLine
            onClick={removeTopic}
            className="text-2xl cursor-pointer text-red-700"
        />
    );
};

export default RemoveBtn;
