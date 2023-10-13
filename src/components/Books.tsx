import { List} from 'antd'

// css
import '../css/books.css'

// components
import BookCard from './BookCard';

const data = [
    {price: 170.00, title: 'book'}
]

const Books: React.FC = () => {


    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            className='book-list'
            dataSource={data}
            renderItem={(item) => (
            <List.Item>
                <BookCard price={item.price} title={item.title} />
            </List.Item>
            )}
        />
    )
}

export default Books