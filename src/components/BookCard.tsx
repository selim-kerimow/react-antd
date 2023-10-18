import { useNavigate } from 'react-router-dom'
import '../css/books.css'
import { IBook } from '../project_data/IBook'
import { useActions } from '../store/hooks'
import { useCookies } from 'react-cookie'

// Ant Design
import {Card, Button, Image, Badge, message} from 'antd'

// react-icons
import { BsCart4 } from 'react-icons/bs'


interface BookCardProps {
    book: IBook,
    budge: string
}

const BookCard: React.FC<BookCardProps> = ({ book, budge }) => {

    const [_, setCookie, removeCookie] = useCookies()
    const { addProduct } = useActions()
    const navigate = useNavigate()

    // fuctions
    const AddToCart = () => {
        addProduct(book)
        message.success('Added Successfully!')
    }
    const cardClickHandler = () => {
        navigate(`/books/detail/${book.id}`),
        removeCookie('selectedBook')
        setCookie('selectedBook', book)
    }

    return (
        <div>
            <Badge.Ribbon text={budge}>

                <Card
                    onClick={cardClickHandler}
                    hoverable
                    className='bookcard-main'
                    cover={<Image className='bookcard-image' src={ book.image } />}
                    bodyStyle={{ height: 165, fontSize: '0.7rem', padding: '5px', lineHeight: 1.3}}
                    >

                    <div className='bookcard-body'>
                        <h2> {book.price} TMT</h2>
                        <Button danger className='bookcard-cart' onClick={AddToCart}>
                        <BsCart4 size={16} style={{ marginRight: 3}}/>
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