import { magazines } from "../project_data/magazines"
import BookCard from "./BookCard"



const Magazines: React.FC = () => {


    return (
        <div className="magazines">
            
            { magazines && magazines?.map(item => 
                <BookCard book={item} budge="Magazines" />
                )}

        </div>
    )
}

export default Magazines