import React from "react";
import { Routes, Route } from "react-router-dom";

// css
import '../css/content.css'

// components
import Home from "../components/Home";
import Books from "../components/Books";
import Magazines from "../components/Magazines";
import Gifts from "../components/Gifts";
import BookDetail from "../components/BookDetail";



const Content: React.FC = () => {


    return (
        <div className="content">
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/books/:id" element={<Books />}/>
                <Route path="/magazines" element={<Magazines />}/>
                <Route path="/gifts" element={<Gifts />}/>
                <Route path="/books/detail/:id" element={<BookDetail />}/>
            </Routes>

        </div>
    )
}

export default Content