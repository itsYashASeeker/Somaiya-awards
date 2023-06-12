import { Link } from "react-router-dom";
import "../css/form1.css";
import { ReactComponent as KJLogo } from "../kjsieit-logo.svg";

function Navbar() {
    return (
        <div className="navbar">
            <KJLogo className="kjLogo" />
            <div className="nav1">
                <button className="n1">Home</button>
                <button className="n1">About us</button>
                <button className="n1">My account</button>
            </div>

        </div>
    )

}

export default Navbar;