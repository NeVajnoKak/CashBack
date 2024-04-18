import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import ShopListPage from "../Pages/ShopListPage/ShopListPage";
import ShopInfoPage from "../Pages/ShopInfoPage/ShopInfoPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children : [
            {path: "", element: <CategoryPage/>},
            {path: "shop-list", element: <ShopListPage/>},
            {path: "shop-info", element: <ShopInfoPage/>},
        ]
    }   
])