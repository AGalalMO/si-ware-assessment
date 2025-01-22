import { useSelector } from "react-redux";
import ProductDetail from "../../features/productDetails";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { MainStore } from "../../types/storeType";
import { useProducts } from "../../hooks/useProducts";

const ProductDetailsPage = () => {
  useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  const products = useSelector(
    (state: MainStore) => state?.mainStore?.products
  );
  useEffect(() => {
    if (products?.length && !products?.[Number(id) - 1]) {
      navigate("/404");
    }
  }, [id,products]);

  return (
    <>
      
      <ProductDetail product={products?.[Number(id) - 1]} />;
    </>
  );
};
export default ProductDetailsPage;
