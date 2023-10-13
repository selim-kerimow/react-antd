import { Flex, List} from 'antd'

// css
import '../css/books.css'

// components
import BookCard from './BookCard';

const data = [
    {price: 170.00, title: 'book'},
    {price: 170.00, title: 'book'},
    {price: 170.00, title: 'book'},
    {price: 170.00, title: 'book'},
    {price: 170.00, title: 'book'},
    {price: 170.00, title: 'book'},
]

const Books: React.FC = () => {


    return (
        <div className='book-list'>
            <div className='book-inner'>
                { data?.map(item => 
                    <BookCard title={item.title} price={item.price} />
                    )}                
            </div>
        </div>
    )
}

export default Books