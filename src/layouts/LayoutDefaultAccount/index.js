import { Link, Outlet } from "react-router";
import WTLogo from "../../images/logo.png";
import './LayoutDefaultAccount.scss';

export default function LayoutDefaultAccount() {
    return (
        <div className="page-wrapper">
            <header className="header-acc my-container">
                <div className="header-acc-img">
                    <Link to='/'>
                        <img src={WTLogo} alt="" />
                    </Link>
                </div>
            </header>

            <main className="main my-container">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="footer__copyrights">
                    <span>© 2023 Waste Trade, All rights reserved. Disclaimer.</span>
                </div>
                <div className="footer__terms">
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}