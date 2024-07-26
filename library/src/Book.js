import React, { useState } from 'react';
import { useLibrary } from './LibraryContext';

function Book({ book }) {
    const { dispatch } = useLibrary();
    const [isEditing, setIsEditing] = useState(false);
    const [editedBook, setEditedBook] = useState({ ...book });

    const handleDelete = () => {
        dispatch({ type: 'delete', id: book.id });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBook(prevBook => ({ ...prevBook, [name]: value }));
    };

    const handleSave = () => {
        dispatch({ type: 'update', book: editedBook });
        setIsEditing(false);
    };

    const handleIssue = () => {
        dispatch({ type: 'issue', id: book.id });
    };

    const handleReturn = () => {
        dispatch({ type: 'return', id: book.id });
    };

    return (
        <li>
            {isEditing ? (
                <div>
                    <input name="title" value={editedBook.title} onChange={handleChange} placeholder="Title" />
                    <input name="author" value={editedBook.author} onChange={handleChange} placeholder="Author" />
                    <input name="genre" value={editedBook.genre} onChange={handleChange} placeholder="Genre" />
                    <input name="year" value={editedBook.year} onChange={handleChange} placeholder="Year" />
                    <input name="pages" value={editedBook.pages} onChange={handleChange} placeholder="Pages" />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <p>Title: {book.title}</p>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Year: {book.year}</p>
                    <p>Pages: {book.pages}</p>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                    {book.available ? (
                        <button onClick={handleIssue}>Issue</button>
                    ) : (
                        <button onClick={handleReturn}>Return</button>
                    )}
                </div>
            )}
        </li>
    );
}

export default Book;
