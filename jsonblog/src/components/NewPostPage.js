import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPostPage({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            body,
        };
        onAddPost(newPost);
        navigate('/posts');
    };

    return (
        <div>
            <h1>Add new post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Text:</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Add post</button>
            </form>
        </div>
    );
}

export default NewPostPage;
