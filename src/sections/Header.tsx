import React from "react";
import { useNavigate } from "react-router-dom";

// css
import '../css/header.css'

// Ant Design
import { Menu, MenuProps } from 'antd'

// react-icons
import { ImHome3 } from 'react-icons/im'


const items: MenuProps['items'] = [
    {key: '', icon: <ImHome3 size={22}/>},
    {key: 'books', label: 'Books', children: [
        {label: 'Biography', key: 'books/biography'},
        {label: 'Romance', key: 'books/romance'},
        {label: 'Fantasy', key: 'books/fantacy'},
    ]},
    {key: 'magazines', label: 'Magazines'},
    {key: 'gifts', label: 'Gifts'}
]


const Header: React.FC = () => {

    const navigate = useNavigate()

    // functions
    const menuClick: MenuProps['onClick'] = (item) => {
        navigate(`/${item.key}`)
    }

    return (
        <div className="header">
            <Menu 
                items={items} 
                onClick={menuClick}
                mode="horizontal"
                style={{display: 'flex', alignItems: "center", fontSize: '1rem'}}
            />
        </div>
    )
}

export default Header