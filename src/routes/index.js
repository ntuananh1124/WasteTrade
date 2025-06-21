import LayoutDefault from "../layouts/LayoutDefault";
import LayoutAdmin from "../layouts/LayoutAdmin";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LogOut from "../components/LogOut";
import SetPassword from "../pages/SetPassword";
import ForgotPassword from "../pages/ForgotPassword";

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
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