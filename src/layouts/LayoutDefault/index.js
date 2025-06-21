import { Outlet } from "react-router";
import WTLogo from "../../images/logo.png";
import './LayoutDefault.scss';

export default function LayoutDefault() {
    return (
        <div className="page-wrapper">
            <header className="header my-container">
                <div className="header-img">
                    <img src={WTLogo} alt="" />
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