import React, { useState } from 'react';
import { useLibrary } from './LibraryContext';
import Book from './Book';

function BookList() {
    const { state, dispatch } = useLibrary();
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        year: '',
        pages: '',
    });
    const [search, setSearch] = useState('');

    const handleAddBook = () => {
        dispatch({ type: 'add', book });
        setBook({ title: '', author: '', genre: '', year: '', pages: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({ ...prevBook, [name]: value }));
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredBooks = state.books.filter(book => {
        const searchLower = search.toLowerCase();
        return (
            book.available &&
            (book.title.toLowerCase().includes(searchLower) ||
                book.author.toLowerCase().includes(searchLower) ||
                book.genre.toLowerCase().includes(searchLower) ||
                book.pages.toString().includes(searchLower))
        );
    });

    const unavailableBooks = state.books.filter(book => !book.available);

    return (
        <div>
            <h1>Library</h1>
            <input name="title" value={book.title} onChange={handleChange} placeholder="Title" />
            <input name="author" value={book.author} onChange={handleChange} placeholder="Author" />
            <input name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" />
            <input name="year" value={book.year} onChange={handleChange} placeholder="Year" />
            <input name="pages" value={book.pages} onChange={handleChange} placeholder="Pages" />
            <button onClick={handleAddBook}>Add Book</button>
            <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search by title, author, genre or pages"
            />
            <h2>Available Books</h2>
            <ul>
                {filteredBooks.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </ul>
            <h2>Unavailable Books</h2>
            <ul>
                {unavailableBooks.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </ul>
        </div>
    );
}

export default BookList;
