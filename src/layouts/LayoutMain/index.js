import { Link, NavLink, Outlet } from "react-router";
import { IoMenu } from "react-icons/io5";
import logo from '../../images/logo-horizone.png';
import { FaRegBell, FaRecycle } from "react-icons/fa";
import './LayoutMain.scss';
import { CiUser } from "react-icons/ci";
import { Avatar, Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { IoMdArrowDropdown, IoIosNotifications, IoIosCreate } from "react-icons/io";
import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { MdOutlineDashboard, MdOutlineAddLocation } from "react-icons/md";
import { RiFileList2Fill, RiListIndefinite } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import HeaderDropdownAcc from "../../components/HeaderDropdownAcc";
const { Content, Footer, Sider } = Layout;

export default function LayoutMain() {
    // eslint-disable-next-line
    const [showDropdown, setShowDropdown] = useState(false);
    // const [isMenuOff, setMenuStatus] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    const token = getCookie('username');

    const items = [
        {
            key: '1',
            icon: <MdOutlineDashboard />,
            label: (
                <NavLink to='/'>Dashboard</NavLink>
            ),
        },
        {
            key: '2',
            icon: <FaRecycle />,
            label: (
                <NavLink to='/marketplace'>Marketplace</NavLink>
            ),
        },
        {
            key: '3',
            icon: <IoIosNotifications />,
            label: (
                <NavLink to='/marketplace'>Wanted Materials</NavLink>
            ),
        },
        {
            key: '4',
            icon: <IoIosCreate />,
            label: (
                <NavLink to='/marketplace'>Create Listing</NavLink>
            ),
        },
        {
            key: '5',
            icon: <RiFileList2Fill />,
            label: (
                <NavLink to='/marketplace'>My Listing</NavLink>
            ),
        },
        {
            key: '6',
            icon: <RiListIndefinite />,
            label: (
                <NavLink to='/marketplace'>My Offers</NavLink>
            ),
        },
        {
            key: '7',
            icon: <FaLocationDot />,
            label: (
                <NavLink to='/marketplace'>My Sites</NavLink>
            ),
        },
        {
            key: '8',
            icon: <MdOutlineAddLocation />,
            label: (
                <NavLink to='/marketplace'>Add Sites</NavLink>
            ),
        },
    ];

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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
        // eslint-disable-next-line
    }, []);

    return (
        // <div className="content-wrapper">
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    {/* <div className="demo-logo-vertical">
                        <img src="" alt="" />
                    </div> */}
                    <Menu
                        defaultSelectedKeys={['1']}
                        items={items}
                        // className="menu-style"
                        mode="inline"
                        // theme="light"
                    />
                </Sider>
                <Layout>
                    <header className="header">
                        <div className="header__main">
                            <div className="header__main__nav-logo" style={{position: 'relative'}}>
                                <Button
                                    type="text"
                                    icon={<IoMenu />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '20px',
                                    }}
                                />
                                <div className="header__main__logo">
                                    <img src={logo} alt="WasteTrade" />
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
                                        <HeaderDropdownAcc />
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
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }]}/>
                        <main id='main' style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                            <Outlet />
                        </main>
                    </Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        // </div>
    )
}