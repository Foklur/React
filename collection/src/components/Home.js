import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Claude Monet's Art Gallery</h1>
            <p><Link to="/pictures">Follow this link</Link></p>
        </div>
    );
};

export default Home;