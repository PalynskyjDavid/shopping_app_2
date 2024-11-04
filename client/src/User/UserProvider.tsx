import React, { createContext, useState } from "react";

interface User {
    id: number;
    name: string;
}

type UserList = {
    userList: User[],
    loggedInUser: number,
    setLoggedInUser: React.Dispatch<React.SetStateAction<number>>
};
// typy zde nemají smysl jelikož hned předávám list uživatelů (usercontext - může být jeden z mnoha 
// a do každého se může předat jiný kontext => provider bude předávat různa data consumerům) do userprovidera.
export const UserContext = createContext<UserList | undefined>(undefined);

function UserProvider({ children }) {
    const [loggedInUser, setLoggedInUser] = useState(1);
    const userList = [
        {
            "id": 0,
            "name": "Mama"
        },
        {
            "id": 1,
            "name": "Tata"
        },
        {
            "id": 2,
            "name": "Pepa"
        },
        {
            "id": 3,
            "name": "Franta"
        },
        {
            "id": 4,
            "name": "Honza"
        }
    ];

    const value:UserList = {
        userList,
        //userList: Object.keys(userMap).map((userId) => userMap[userId]),
        loggedInUser,
        setLoggedInUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;