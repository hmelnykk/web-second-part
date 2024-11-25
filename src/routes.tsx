import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/Catalog";
import SingleArtistPage from "./pages/SingleArtistPage";
import CartPage from "./pages/Cart";

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
        path: '/catalog/:id',
        element: <MainLayout>
            <SingleArtistPage />
        </MainLayout>,
        loader: async ({ request, params }) => {
            const { id } = params;
            return await fetch(`http://localhost:3001/artists/${id}`).then(res => res.json());
        }
    },
    {
        path: '/cart',
        element: <MainLayout>
            <CartPage />
        </MainLayout>
    },
]);
