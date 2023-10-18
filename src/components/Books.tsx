import { biography } from '../project_data/biography';
import { useLocation } from 'react-router-dom';

// css
import '../css/books.css'

// components
import BookCard from './BookCard';
import { romance } from '../project_data/romance';


const Books: React.FC = () => {

    const location = useLocation()

    localStorage.removeItem('favorites')

    return (
        <div className='book-list'>
            <div className='book-inner'>
                
                { location.pathname == '/books/biography' && biography?.map(book => 
                    <BookCard book={book} key={book.id} budge='Biography'/>
                    )}

                { location.pathname == '/books/romance' && romance?.map(item => 
                    <BookCard book={item} budge='Romance'/>
                    )}

            </div>
        </div>
    )
}

export default Books