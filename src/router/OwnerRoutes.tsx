import { RouteObject } from "react-router-dom";
import OwnerLayout from "@/layout/OwnerLayout";
import OwnerHome from "@/pages/OwnerHome";

const OwnerRoutes: RouteObject[] = [
  {
    path: "/owner",
    element: <OwnerLayout />,
    children: [
      {
        index: true,
        element: <OwnerHome />,
      },
    ],
  },
];

export default OwnerRoutes;
