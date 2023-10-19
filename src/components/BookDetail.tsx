import { useCookies } from 'react-cookie'
import '../css/bookDetail.css'
import { Button, Image, message } from 'antd'
import { BsCart4 } from 'react-icons/bs'
import { useActions } from '../store/hooks'



const BookDetail: React.FC = () => {

    const { addProduct } = useActions()

    const [cookie] = useCookies()

    const cartAddHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        addProduct(cookie.selectedBook)
        message.success('Successfully added!')
    }

    return (
        <div className="detail">

            <div className='detail-image'>
                <Image style={{ width: 250}} src={cookie.selectedBook.image}/>
            </div>


            <div className='detail-container'>
                <h2> {cookie.selectedBook.title} </h2>
                <div className='detail-content'>
                    <p> <span className='detail-name'>Author:</span> {cookie.selectedBook.author} </p>
                    <p> <span className='detail-name'>Category:</span> {cookie.selectedBook.category} </p>
                    <p> <span className='detail-name'>Barcode:</span> {cookie.selectedBook.barcode}</p>
                    <p> <span className='detail-name'>Language:</span> {cookie.selectedBook.language}</p>
                    <p> <span className='detail-name'>Release:</span> {cookie.selectedBook.release}</p>
                </div>
                <div className='detail-low'>
                    <p> {cookie.selectedBook.price} TMT</p>
                    <Button type='primary' danger className='detail-button' onClick={cartAddHandler}> 
                        <BsCart4 size={16} style={{ marginRight: 3}}/>Cart
                    </Button>
                </div>
                <div className='detail-description'>
                    { cookie.selectedBook.description }
                </div>
            </div>

        </div>
    )
}

export default BookDetail