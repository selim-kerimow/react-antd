import '../css/books.css'

// Ant Design
import {Card, Button, Image, Badge} from 'antd'

// react-icons
import { BsCart4 } from 'react-icons/bs'

interface BookCardProps {
    price: number,
    title: string,
    image: string
}

const BookCard: React.FC<BookCardProps> = ({ price, title, image }) => {



    return (
        <div>
            <Badge.Ribbon text='New'>

                <Card
                    hoverable
                    className='bookcard-main'
                    cover={<Image className='bookcard-image' src={ image } />}
                    bodyStyle={{ height: 165, fontSize: '0.7rem', padding: '5px', lineHeight: 1.3}}
                    >
                    <div className='bookcard-body'>
                        <h2> {price} TMT</h2>
                        <Button danger style={{fontSize: '1rem'}}>
                            <BsCart4 size={17}/>
                            Cart
                        </Button>
                    </div>
                    <div className='bookcard-title'>
                        <h2> {title} </h2>
                    </div>
                </Card>

            </Badge.Ribbon>
        </div>

    )
}

export default BookCard