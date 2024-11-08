import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/Catalog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout>
            <HomePage />
        </MainLayout>
    },
    {
        path: '/catalog',
        element: <MainLayout>
            <CatalogPage />
        </MainLayout>
    },
    {
        path: '/cart',
        element: <MainLayout>
            <HomePage />
        </MainLayout>
    },
]);
