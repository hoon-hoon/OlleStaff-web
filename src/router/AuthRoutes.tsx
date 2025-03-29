import { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignUpPage";
import RestorePage from "../pages/auth/Restore";

const AuthRoutes: RouteObject[] = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
        ],
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/auth/restore",
        element: <RestorePage />,
    },
];

export default AuthRoutes;
