import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import '../css/header.css'

// Ant Design
import { Menu, MenuProps } from 'antd'


const items: MenuProps['items'] = [
    {key: '', label: 'Homepage'},
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

    // states
    const [selectedItem, setSelectedItem] = useState('')

    // functions
    const menuClick: MenuProps['onClick'] = (item) => {
        setSelectedItem(item.key)
        navigate(`/${item.key}`)
    }

    return (
        <div className="header">
            <Menu 
                items={items} 
                onClick={menuClick}
                selectedKeys={[selectedItem]}
                mode="horizontal"
                style={{fontSize: '1rem'}}
            />
        </div>
    )
}

export default Header