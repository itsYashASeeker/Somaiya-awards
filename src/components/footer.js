// import { Link } from "react-router-dom";
import "../css/Footer.css";
import kjsitLogo from "../img/kjsit.png";
import somaiyaTrust from "../img/somaiyaTrust.png";

export default function Footer(){
    return(
        <div className="footer">
            <div className="row">
                <img src={kjsitLogo} className="fkjLogo"></img>
                <img src={somaiyaTrust} className="trustLogo"></img>
                <p className="dev1 fR">Department of Computer Engineering</p>
            </div>
        </div>
    )
}