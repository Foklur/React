import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ posts }) {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
