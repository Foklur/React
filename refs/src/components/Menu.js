import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <nav className="headerLinks">
            <a><Link to="/">Add New Pictures</Link></a>
            <a><Link to="/">Tasks List</Link></a>
        </nav>
    )
}

export default Menu;