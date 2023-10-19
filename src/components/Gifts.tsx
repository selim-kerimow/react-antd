import { gifts } from "../project_data/gifts"
import BookCard from "./BookCard"
import '../css/gifts.css'


const Gifts: React.FC = () => {


    return (
        <div className="gifts">
            
            { gifts && gifts.map(item => 
                <BookCard book={item} budge="Gifts" />
                )}

        </div>
    )
}

export default Gifts