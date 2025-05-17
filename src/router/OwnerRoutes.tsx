import { RouteObject } from "react-router-dom";
import OwnerLayout from "@/layout/OwnerLayout";
import OwnerHome from "@/pages/owner/HomePage";
import RecruitPage from "@/pages/owner/RecruitPage";
import UserInfoPage from "@/pages/owner/UserInfoPage";

const OwnerRoutes: RouteObject[] = [
    {
        path: "/owner/",
        element: <OwnerLayout />,
        children: [
            {
                index: true,
                element: <OwnerHome />,
            },
            {
                path: "recruit",
                element: <RecruitPage />,
            },
            {
                path: "userinfo",
                element: <UserInfoPage />,
            },
        ],
    },
];

export default OwnerRoutes;
