import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="header__wrapper">
                <div>
                    <Link to={'/'}>Logo</Link>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to={'/'}>Главная</Link>
                        </li>
                        <li>
                            <Link to={'branches'}>Филиалы</Link>
                        </li>
                        <li>
                            <Link to={'about'}>О нас</Link>
                        </li>
                        <li>
                            <Link to={'contact'}>Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button>BTN</button>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header