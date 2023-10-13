import '../css/books.css'

// Ant Design
import {Card, Button} from 'antd'

// react-icons
import { BsCart4 } from 'react-icons/bs'

interface BookCardProps {
    price: number,
    title: string
}

const BookCard: React.FC<BookCardProps> = ({ price, title }) => {



    return (
        <div>
            <Card
            hoverable
            className='bookcard-main'
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            bodyStyle={{ fontSize: '0.7rem', padding: '5px', lineHeight: 0.6}}
            >
            <div className='bookcard-body'>
                <h2> {price} TMT</h2>
                <Button danger style={{fontSize: '1rem'}}>
                    <BsCart4 size={17}/>
                    Cart
                </Button>
            </div>
            <div>
                <h2> {title} </h2>
            </div>
        </Card>            
        </div>

    )
}

export default BookCard