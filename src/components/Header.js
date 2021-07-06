import { Link } from "react-router-dom";
import {useState} from "react";
import {Navbar} from "react-bulma-components";

function Header(props){
    const [burger, setBurger] = useState("burger is-dark")

    const burgerChange = () => {
        burger === "is-active is-dark" ? setBurger("burger is-dark") : setBurger("is-active is-dark")
    }

    return(
        <Navbar className="nav is-dark">
            <Navbar.Brand>
                <Navbar.Item>
                    <Link className="nav-link" to="/home">
                    Home
                    </Link>
                </Navbar.Item>
                <Navbar.Burger className={burger} onClick={burgerChange}/>
            </Navbar.Brand>
        </Navbar>
    )
};

export default Header;