import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <nav className="headerLinks">
            <a><Link to="/newPicture">Add New Pictures</Link></a>
            <a><Link to="/listTasks">Tasks List</Link></a>
        </nav>
    )
}

export default Menu;