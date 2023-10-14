import '../css/books.css'
import { IBook } from '../project_data/books'

// Ant Design
import {Card, Button, Image, Badge, message} from 'antd'

// react-icons
import { BsCart4 } from 'react-icons/bs'
import { useActions } from '../store/hooks'


interface BookCardProps {
    book: IBook
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {

    const { addProduct } = useActions()

    // fuctions
    const AddToCart = () => {
        addProduct(book)
        message.success('Added Successfully!')
    }

    return (
        <div>
            <Badge.Ribbon text='New'>

                <Card
                    hoverable
                    className='bookcard-main'
                    cover={<Image className='bookcard-image' src={ book.image } />}
                    bodyStyle={{ height: 165, fontSize: '0.7rem', padding: '5px', lineHeight: 1.3}}
                    >

                    <div className='bookcard-body'>
                        <h2> {book.price} TMT</h2>
                        <Button danger style={{fontSize: '1rem'}} onClick={AddToCart}>
                            <BsCart4 size={17}/>
                            Cart
                        </Button>
                    </div>

                    <div className='bookcard-title'>
                        <h2> {book.title} </h2>
                    </div>
                </Card>

            </Badge.Ribbon>
        </div>

    )
}

export default BookCard