import { useCookies } from 'react-cookie'
import '../css/bookDetail.css'
import { Button, Image } from 'antd'



const BookDetail: React.FC = () => {

    const [cookie] = useCookies()

    return (
        <div className="detail">

            <div className='detail-image'>
                <Image style={{ width: 250}} src={cookie.selectedBook.image}/>
            </div>


            <div className='detail-container'>
                <h2> {cookie.selectedBook.title} </h2>
                <div className='detail-content'>
                    <p> <span className='detail-name'>Author:</span> Smbd </p>
                    <p> <span className='detail-name'>Category:</span> </p>
                    <p> <span className='detail-name'>Barcode:</span> </p>
                    <p> <span className='detail-name'>Language:</span> </p>
                    <p> <span className='detail-name'>Release:</span> </p>
                </div>
                <div className='detail-low'>
                    <p> {cookie.selectedBook.price} TMT</p>
                    <Button type='primary' danger>Cart</Button>
                </div>
                <div className='detail-description'>
                «Иметь и не иметь» (1937 г.) – история Гарри Моргана, простого и честного рыбака, который превращается в контрабандиста. В основе повествования – судьба главного героя, ставшего преступником. Но кроме этого, «Иметь и не иметь» – остросоциальный роман, в центре которого – конфликт бедности и богатства, имущих и не имущих, людей, которых бедность вынуждает преступать закон, и людей, наслаждающихся жизнью и прожигающих ее. Кто же из них более достоин порицания?
                </div>
            </div>

        </div>
    )
}

export default BookDetail