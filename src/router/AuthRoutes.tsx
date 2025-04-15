import { RouteObject } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import KakaoRedirectPage from "@/pages/auth/KakaoRedirectPage";
import NaverRedirectPage from "@/pages/auth/NaverRedirectPage";
import GoogleRedirectPage from "@/pages/auth/GoogleRedirectPage";
import BusinessCertification from "@/pages/auth/BusinessCertification";

const AuthRoutes: RouteObject[] = [
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />,
            },
            {
                path: "/signup",
                element: <SignupPage />,
            },
        ],
    },

    {
        path: "/auth/kakao",
        element: <KakaoRedirectPage />,
    },
    {
        path: "/auth/naver",
        element: <NaverRedirectPage />,
    },
    {
        path: "/auth/google",
        element: <GoogleRedirectPage />,
    },
    {
        path: "/auth/business-certificate",
        element: <BusinessCertification />,
    },
];

export default AuthRoutes;
