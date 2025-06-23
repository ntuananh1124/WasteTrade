// import LayoutDefault from "../layouts/LayoutDefaultAccount";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LogOut from "../components/LogOut";
import SetPassword from "../pages/SetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import LayoutDefaultAccount from "../layouts/LayoutDefaultAccount";
import LayoutMain from "../layouts/LayoutMain";

export const routes = [
    {
        path: '/',
        element: <LayoutMain />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },
    {
        path: 'account',
        element: <LayoutDefaultAccount />,
        children: [
            {
                path: 'registration',
                element: <Registration />
            },
            {
                index: 'true',
                path: 'login',
                element: <Login />
            },
            {
                path: 'log-out',
                element: <LogOut />
            },
            {
                path: 'set-password',
                element: <SetPassword />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            }
        ]
    },
    {
        path: 'admin',
        element: <LayoutAdmin />
    }
]