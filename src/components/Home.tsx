import '../css/home.css'
import { newBooks } from '../project_data/new'
import { popular } from '../project_data/popular'
import { trending } from '../project_data/trending'
import BookCard from './BookCard'


const Home = () => {

    return (
        <div className="home">
            <div className='home-quote'>
                <h1 className='quote-text'>“Never trust anyone who has not brought a book with them.”</h1>
                <h3 className='quote-author'>― Lemony Snicket</h3>
            </div>

            <h1 className='trending-title'>Trending</h1>
            <div className='trending-books'>
                { trending?.map(item => 
                    <BookCard book={item} key={item.id} budge='Trending'/>             
                    )}                
            </div>

            <h1 className='new-title'>New</h1>
            <div className='new-books'>
                { newBooks?.map(item => 
                    <BookCard book={item} key={item.id} budge='Trending'/>             
                    )}                
            </div>

            <h1 className='new-title'>Popular</h1>
            <div className='new-books'>
                { popular?.map(item => 
                    <BookCard book={item} key={item.id} budge='Trending'/>             
                    )}                
            </div>
        </div>
    )
}

export default Home