import { RouteObject } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";

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
];

export default AuthRoutes;
