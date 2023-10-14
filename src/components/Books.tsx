import { books_data } from '../project_data/books';

// css
import '../css/books.css'

// components
import BookCard from './BookCard';

const Books: React.FC = () => {

    const booksByCategory = () => {
        
    }


    return (
        <div className='book-list'>
            <div className='book-inner'>
                { books_data.biography?.map(item => 
                    <BookCard title={item.title} price={item.price} image={item.image}/>
                    )}                
            </div>
        </div>
    )
}

export default Books