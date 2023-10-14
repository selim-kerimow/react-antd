import { biography } from '../project_data/books';
import { useLocation } from 'react-router-dom';

// css
import '../css/books.css'

// components
import BookCard from './BookCard';


const Books: React.FC = () => {

    const location = useLocation()


    return (
        <div className='book-list'>
            <div className='book-inner'>

                { location.pathname == '/books/biography' && biography?.map(item => 
                    <BookCard title={item.title} price={item.price} image={item.image} key={item.id}/>
                    )}

            </div>
        </div>
    )
}

export default Books