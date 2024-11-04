import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../User/UserProvider.tsx";

import MemberList from "./MemberList.js";
// import ItemList from "./ItemList.js";
// import Item from "./Item.js";

export default function CartWrapper() {
    const { data, handlerMap } = useContext(DetailContext);
    const { userList, loggedInUser } = useContext(UserContext);
    const [,setShow] = useState(false);


    return (
        <div>
            {data.map((dataItem) => (
                <div key={dataItem.id}>
                    <MemberList
                        data={dataItem}
                        userList={userList}
                        handlerMap={handlerMap}
                        handleClose={() => setShow(false)}
                        loggedInUser={loggedInUser}
                    />
                </div>
            ))}
        </div>
    );
}
