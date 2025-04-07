import { RouteObject } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import RestorePage from "@/pages/auth/Restore";
import KakaoRedirectPage from "@/pages/auth/KakaoRedirectPage";
import NaverRedirectPage from "@/pages/auth/NaverRedirectPage";

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
  {
    path: "/auth/kakao",
    element: <KakaoRedirectPage />,
  },
  {
    path: "/auth/naver",
    element: <NaverRedirectPage />,
  },
];

export default AuthRoutes;
