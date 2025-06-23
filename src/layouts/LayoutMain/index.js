import { Link, Outlet, useNavigate } from "react-router";
import { IoMenu } from "react-icons/io5";
import logo from '../../images/logo-horizone.png';
import { FaRegBell } from "react-icons/fa";
import './LayoutMain.scss';
import { CiUser } from "react-icons/ci";
import { Avatar, Button } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { deleteAllCookies, getCookie } from "../../helpers/cookie";

export default function LayoutMain() {
    // eslint-disable-next-line
    const [showDropdown, setShowDropdown] = useState(false);

    const token = getCookie('username');
    const navigate = useNavigate();

    const handleLogOut = () => {
        deleteAllCookies();
        navigate('/account/login');
    }

    useEffect(() => {
        if (token) {
            const a = document.getElementById('a');

        const handleClick = () => {
            const dropDown = document.getElementById('b');
            setShowDropdown((prev) => {
                const newVal = !prev;
                dropDown.style.display = newVal ? 'block' : 'none';
                return newVal;
            });
        };

        a.addEventListener('click', handleClick);

        return () => {
            a.removeEventListener('click', handleClick);
        };
        }
    }, []);

    return (
        <div className="content-wrapper">
            <header className="header">
                <div className="header__main">
                    <div className="header__main__nav-logo">
                        <div className="header__main__nav">
                            <IoMenu/>
                        </div>
                        <div className="header__main__logo">
                            <Link to='/'>
                                <img src={logo} alt="WasteTrade" />
                            </Link>
                        </div>
                    </div>
                    <div className="header__main__buy-sell-want">
                        <ul>
                            <li>
                                <Link>Buy</Link>
                            </li>
                            <li>
                                <Link>Sell</Link>
                            </li>
                            <li>
                                <Link>Wanted</Link>
                            </li>
                        </ul>
                    </div>
                    {token ? <>
                        <div className="header__main__user-noti">
                        <div className="header__main__user">
                            <div id="a" className="header__main__user__content">
                                <div className="header__main__user__content__avatar">
                                    <Avatar icon={<CiUser />} />
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <div className="header__main__user__content__name">
                                        <span><b>Jason</b></span>
                                    </div>
                                    <div className="header__main__user__content__role">
                                        <span>Buyer</span>
                                    </div>
                                </div>
                                <div className="header__main__user__content__arrow">
                                    <IoMdArrowDropdown />
                                </div>
                            </div>
                            <div id="b" className="header__main__dropdown">
                                <Button type="primary" onClick={handleLogOut}>Log Out</Button>
                            </div>
                        </div>
                        <div className="header__main__noti">
                            <FaRegBell />
                        </div>
                    </div>
                    </> : 
                    <div className='header__main__auth'>
                        <Button type="primary">
                            <Link to='/account/login'>Sign In</Link>
                        </Button>
                        <Button>
                            <Link to='/account/registration'>Registration</Link>
                        </Button>
                    </div>
                    }
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    )
}