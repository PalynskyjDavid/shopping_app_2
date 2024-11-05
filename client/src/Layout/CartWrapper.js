import { useContext } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../User/UserProvider.tsx";

import MemberList from "./MemberList.js";
// import ItemList from "./ItemList.js";
// import Item from "./Item.js";

export default function CartWrapper() {
    const { data, handlerMap } = useContext(DetailContext);
    const { userList, loggedInUser } = useContext(UserContext);
    //const [ show , setShow] = useState();
    // const [showStates, setShowStates] = useState({});

    // const toggleShow = (id, value) => {
    //     setShowStates((prev) => ({
    //         ...prev,
    //         [id]: value
    //     }));
    // };
    // handlerMap.handleClose = function() {setShow(false)}
    // handlerMap.handleOpen = function() {setShow(true)}
    //handlerMap.setShow = function(id, value) {toggleShow(id, value)}
    // handlerMap.handleClose = () => setShow(false)
    // handlerMap.handleOpen = () => setShow(true)
    //handlerMap.addMember({list_id: 345, memberId: 0})


    return (
        <div>
            {data.map((dataItem) => (
                <div key={dataItem.id}>
                    <MemberList
                        //show={showStates}
                        data={dataItem}
                        userList={userList}
                        handlerMap={handlerMap}
                        //handleClose={() => setShow(false)}
                        loggedInUser={loggedInUser}
                    />
                </div>
            ))}
        </div>
    );
}
