import { useGetAllProductsQuery } from "../../Redux/product/productApi";
import Spinner from "../Spinner/Spinner";
import ProductCard from "./ProductCard";

const ProductsComp = () => {
  const { data, isLoading, isSuccess } = useGetAllProductsQuery({});
  if (isLoading) return <Spinner />;

  return (
    <>
      {!isLoading && isSuccess && data?.data?.length > 0 && (
        <section className="py-10">
          <div className="container">
            <h2 className="text-3xl text-center w-max mx-auto border-b-2 border-primary text-priamry pb-2 font-semibold text-neutral">
              Products
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
              {data?.data?.slice(0, 4).map((product) => (
                <ProductCard product={product} key={product?._id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductsComp;
