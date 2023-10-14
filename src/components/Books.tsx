import { biography } from '../project_data/books';
import { useLocation } from 'react-router-dom';

// css
import '../css/books.css'

// components
import BookCard from './BookCard';


const Books: React.FC = () => {

    const location = useLocation()

    localStorage.removeItem('favorites')

    return (
        <div className='book-list'>
            <div className='book-inner'>

                { location.pathname == '/books/biography' && biography?.map(book => 
                    <BookCard book={book} key={book.id}/>
                    )}

            </div>
        </div>
    )
}

export default Books