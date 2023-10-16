import '../css/home.css'
import BookCard from './BookCard'
import { trending } from '../project_data/books'


const Home = () => {

    localStorage.removeItem('cart')

    return (
        <div className="home">
            <h1 className='trending-title'>Trending</h1>
            <div className='trending-books'>
                { trending?.map(item => 
                    <BookCard book={item} key={item.id} budge='Trending'/>             
                    )}                
            </div>

            <h1 className='new-title'>New</h1>
            <div className='new-books'>
                { trending?.map(item => 
                    <BookCard book={item} key={item.id} budge='Trending'/>             
                    )}                
            </div>
        </div>
    )
}

export default Home