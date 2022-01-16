import logo from "../../assets/images/logo.png";
import "./Header.css"

export const Header = () => {
    return (
        <div className="header">
            <img src={logo} />
            <h2>Book List Application</h2>
        </div>

    )
}