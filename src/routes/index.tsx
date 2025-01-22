import { PATH } from "../constants/paths";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../ components/layouts/MainLayout";

// ---> Static pages
const HomePage = lazy(() => import("../pages/HomePage"));

// ---> Products pages
const ProductsPage = lazy(() => import("../pages/ProductPages/ProductsPage"));
const ProductDetailsPage = lazy(
  () => import("../pages/ProductPages/ProductDetailsPage")
);

// ---> Error pages
const NotFoundPage = lazy(() => import("../pages/ErrorPages/404Page"));

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>LOADING ...</>}>
        <MainLayout>
          <Routes>
            {/* Static pages routes */}
            <Route path={PATH.HOME} element={<HomePage />} />
            {/* Products routes */}
            <Route path={PATH.PRODUCTS} element={<ProductsPage />} />
            <Route path={PATH.PRODUCT_SHOW} element={<ProductDetailsPage />} />

            {/* Error routes */}
            <Route path={"/404"} element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
};
