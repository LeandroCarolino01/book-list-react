import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books, setBooks] = useState([
        {title:'name of the wind', author: 'patrick rothfuss', id: 1},
        {title:'book 2', author: 'patrick rothfuss', id: 2},
        {title:'book 3', author: 'patrick rothfuss', id: 3}
    ]);
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;
