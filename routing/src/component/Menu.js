import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <nav className="headerLinks">
            <a><Link to="/biography">Biography</Link></a>
            <a><Link to="/mostPopularPicture">Most Popular Picture</Link></a>
            <a><Link to="/galaryPictures">Galery Pictures</Link></a>
        </nav>
    )
}

export default Menu;