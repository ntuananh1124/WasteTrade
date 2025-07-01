import { useNavigate } from 'react-router';
import { deleteAllCookies } from '../../helpers/cookie';
import './HeaderDropdownAcc.scss';
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

export default function HeaderDropdownAcc() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        deleteAllCookies();
        navigate('/account/login');
    };
    return (
        <div className="header__dropdown-acc">
            <div className="header__dropdown-acc__setting">
                <div className="header__dropdown-acc__setting__icon">
                    <MdOutlineManageAccounts />
                </div>
                <span style={{fontSize: '13px'}}><b>Account Setting</b></span>
            </div>
            <div className="header__dropdown-acc__logout" onClick={handleLogOut}>
                <div className="header__dropdown-acc__logout__icon">
                    <BiLogOut />
                </div>
                <span><b>Log Out</b></span>
            </div>
        </div>
    )
}