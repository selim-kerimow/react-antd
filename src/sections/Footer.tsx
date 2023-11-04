import React from "react";
import '../css/footer.css'
import { BiLogoGithub } from 'react-icons/bi'


const Footer: React.FC = () => {


    return (
        <div className="footer">
            <p>Selim Kerimov</p>
            <p>Asghabat 2023</p>
            <p>
                <BiLogoGithub size={22} style={{ marginRight: 5}}/>
                <a href="https://github.com/selim-kerimow/react-antd" target="_blank">Go To Repository</a>
            </p>
        </div>
    )
}

export default Footer