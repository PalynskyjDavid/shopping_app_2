import { useContext } from "react";
import { UserContext } from "../User/UserProvider.tsx";
import '../Styles/Dropdown.css';

export default function UserDropDown() {
    const { userList, setLoggedInUser } = useContext(UserContext);

    return (
        <div className="dropdown">
            <button className="dropbtn">Vyber uzivatele</button>
            <div className="dropdown-content">
                {userList.map((user) => (
                    <div
                        key={user.id}
                        className="dropdown-item"
                        onClick={() => (setLoggedInUser(user.id))}>
                        {/* taky se může předat funkce jako onClick={myFunction} nebo {myFunction(param)} ale ta se automaticky spustí */}
                        {user.id} : {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}