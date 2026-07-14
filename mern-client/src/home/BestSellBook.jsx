import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

export const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch(`${import.meta.env.VITE_API_URL}/all-books`).then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    }, [])
  return (
    <div>
        <BookCards books={books} headLine="Best Seller books"/>
    </div>
  )
}

export default BestSellerBooks