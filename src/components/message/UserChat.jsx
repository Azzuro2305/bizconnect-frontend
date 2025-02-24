import { React, useEffect, useState } from "react";
import { useGetAllUsers, useLocalSessionStore } from "../Store";

import {
    collection,
    doc,
    setDoc,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    serverTimestamp,
    query,
    orderBy,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { v4 } from "uuid";

const UserChat = ({ data, onUserClick }) => {
    const [active, setActive] = useState(false);

    const handleButtonClick = (user) => {
        onUserClick({
            id: data.id,
            userName: data.userName,
            profileImg: data.profileImg,
            email: data.email,
        });
    };

    return (
        <button
            className={`message-users px-4 py-2 flex w-full justify-between border-b-2 border-slate-400 hover:bg-[#303030] ${
                active ? "" : ""
            }`}
            onClick={handleButtonClick}
            // onClick={() => setActive(!active)}
        >
            <div className="user-info flex space-x-3">
                <img
                    className="block rounded-full size-16"
                    src={data.profileImg}
                    alt="This is Photo"
                />
                <div className="content text-start">
                    <div className="name text-xl font-semibold">
                        {data.userName}
                    </div>
                    <div className="message text-sm text-slate-400">
                        {/* Lorem ipsum dolor sit amet. */}
                    </div>
                </div>
            </div>
            <div className="date"></div>
        </button>
    );
};

export default UserChat;
