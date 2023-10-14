import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// react-icons
import { BsCart4 } from 'react-icons/bs'
import { VscThreeBars } from 'react-icons/vsc'
import { GrClose } from 'react-icons/gr'

// css
import '../css/header.css'

// Ant Design
import { Button, Menu, MenuProps } from 'antd'


const items: MenuProps['items'] = [
    {key: '', label: 'Home'},
    {key: 'books', label: 'Books', children: [
        {label: 'Biography', key: 'books/biography'},
        {label: 'Romance', key: 'books/romance'},
        {label: 'Fantasy', key: 'books/fantacy'},
    ]},
    {key: 'magazines', label: 'Magazines'},
    {key: 'gifts', label: 'Gifts'}
]


const Header: React.FC = () => {

    const [open, setOpen] = useState(false)

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
            <div className="header-title">
                <h2>GN Bookstore</h2>
            </div>

            <div className="header-right">
                <div className="menu-bar" onClick={() => setOpen(!open)}>
                    { open ? <GrClose size={20} /> : <VscThreeBars size={28} /> } 
                </div>

                <Menu 
                    className={`header-menu ${open && 'opened'}`}
                    items={items} 
                    onClick={menuClick}
                    selectedKeys={[selectedItem]}
                    mode="horizontal"
                />
                
                <Button type="primary" className="header-button">
                    <BsCart4 size={15} style={{ marginRight: 3}}/> Cart
                </Button>                
            </div>

        </div>
    )
}

export default Header