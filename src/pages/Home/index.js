import { Link, useNavigate } from "react-router";
import { deleteAllCookies, getCookie } from "../../helpers/cookie";
import { Button } from "antd";

export default function Home() {
    const username = getCookie('username');
    const navigate = useNavigate();

    const handleLogOut = () => {
        deleteAllCookies();
        navigate('/account/login');
    };

    return (
        <>
            <div>Home</div>
            <Link to='/account/registration'>Registration</Link>
            {username && <>
                <div>Hi {username}</div>
                <Button onClick={handleLogOut}>Log Out</Button>
            </>}
        </>
    )
}