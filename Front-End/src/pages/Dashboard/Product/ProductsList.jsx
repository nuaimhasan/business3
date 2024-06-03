import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteProductByIdMutation,
  useGetAllProductsQuery,
} from "../../../Redux/product/productApi";
import Spinner from "../../../components/Spinner/Spinner";

const ProductsList = () => {
  const [deleteProduct] = useDeleteProductByIdMutation();
  const { data, isLoading, isError, isSuccess } = useGetAllProductsQuery();
  const products = data?.data;

  const deleteProductHandler = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this product?");
    if (isConfirm) {
      try {
        const res = await deleteProduct(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "",
            text: "Product Deleted Successfully",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  if (isLoading) return <Spinner />;

  let content = null;

  if (isError) {
    content = (
      <p className="text-red-500 mt-5">Something went wrong to get data!</p>
    );
  }

  if (!isError && isSuccess) {
    content = (
      <tbody>
        {products?.map((product) => (
          <tr key={product?._id}>
            <td>{product?.title}</td>
            <td>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/products/${
                  product?.image
                }`}
                alt={product?.image}
                className="w-28 h-14"
              />
            </td>
            <td>{product?.category?.name}</td>
            <td>{product?.subCategory?.name}</td>
            <td>{product?.subSubCategory?.name}</td>
            <td>
              <div className="flex gap-3 items-center">
                <Link to={`/admin/products/edit-product/${product?._id}`}>
                  <AiOutlineEdit className="text-lg hover:text-red-500" />
                </Link>
                <button onClick={() => deleteProductHandler(product?._id)}>
                  <AiOutlineDelete className="text-lg hover:text-red-500" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Products</h1>
          <Link to="/admin/products/add-product/" className="secondary_btn">
            Add Product
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Sub SubCategory</th>
              <th>Action</th>
            </tr>
          </thead>
          {content}
        </table>
      </div>
    </section>
  );
};

export default ProductsList;
