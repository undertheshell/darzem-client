import React from "react";
import { BookCard } from "./book_card";

export const BooksListView = (props) => {
    return (
        <div className="justify-content-center row row-cols-1 row-cols-md-3 g-4 m-2">
            { props.books.map(book => { return <BookCard key={book.id} book = { book }/> }) }
        </div>
    );
}