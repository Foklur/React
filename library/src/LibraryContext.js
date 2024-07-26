import React, { createContext, useReducer, useContext } from 'react';

const LibraryContext = createContext();

const initialState = {
    books: [],
    nextId: 1,
};

function libraryReducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                books: [...state.books, { ...action.book, id: state.nextId, available: true }],
                nextId: state.nextId + 1,
            };
        case 'delete':
            return {
                books: state.books.filter(book => book.id !== action.id),
            };
        case 'update':
            return {
                books: state.books.map(book =>
                    book.id === action.book.id ? action.book : book
                ),
            };
        case 'issue':
            return {
                books: state.books.map(book =>
                    book.id === action.id ? { ...book, available: false } : book
                ),
            };
        case 'return':
            return {
                books: state.books.map(book =>
                    book.id === action.id ? { ...book, available: true } : book
                ),
            };
        default:
            throw new Error('Unknown action type');
    }
}

export function LibraryProvider({ children }) {
    const [state, dispatch] = useReducer(libraryReducer, initialState);

    return (
        <LibraryContext.Provider value={{ state, dispatch }}>
            {children}
        </LibraryContext.Provider>
    );
}

export function useLibrary() {
    const context = useContext(LibraryContext);
    if (!context) {
        throw new Error('useLibrary must be used within a LibraryProvider');
    }
    return context;
}
