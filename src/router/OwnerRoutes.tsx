import { RouteObject } from "react-router-dom";
import OwnerLayout from "@/layout/OwnerLayout";
import OwnerHome from "@/pages/owner/OwnerHome";
import Test from "@/pages/owner/Test";

const OwnerRoutes: RouteObject[] = [
    {
        path: "/owner",
        element: <OwnerLayout />,
        children: [
            {
                index: true,
                element: <OwnerHome />,
            },
            {
                path: "test",
                element: <Test />,
            },
        ],
    },
];

export default OwnerRoutes;
