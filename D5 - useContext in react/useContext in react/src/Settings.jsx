import { useContext } from "react";
import userContext from "./context/userContext";

function Settings() {

    const user = useContext(userContext)

    return (
        <>
        <p>Welcome to settings : {user}</p>
        </>
    )
}

export default Settings;