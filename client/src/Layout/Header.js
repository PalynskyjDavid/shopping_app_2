import { useContext } from "react";
import { UserContext } from "../User/UserProvider.tsx";
import '../Styles/Header.css';
import UserDropDown from "./UserDropDown.js";


export default function Header() {
    const { loggedInUser, userList } = useContext(UserContext);
    return (
        <header className="header">
            <div className="header-title">Shopping app</div>
            <div>
            <div className="header-user">Hello {userList[loggedInUser].name}</div>
            <UserDropDown />
            </div>
        </header>
    )
}
