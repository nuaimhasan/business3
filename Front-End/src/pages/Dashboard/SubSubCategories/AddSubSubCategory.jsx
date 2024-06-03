import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { useGetCategoriesQuery, useGetCategoryQuery } from "../../../Redux/category/categoryApi";
import { useAddSubSubCategoryMutation } from "../../../Redux/subSubCategory/subSubCategoryApi";

export default function AddSubSubCategory() {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");
  const { data, isSuccess } = useGetCategoriesQuery();
  const { data: category } = useGetCategoryQuery(categoryId);
  const subCategories = category?.data?.subCategories;
  const [addSubSubCategory, { isLoading }] = useAddSubSubCategoryMutation();

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const subCategoryId = e.target.subCategory.value;

    const subSubCategory = {
      name,
      categoryId,
      subCategoryId,
    };

    const result = await addSubSubCategory(subSubCategory);

    if (result?.data?.success) {
      Swal.fire("", "add success", "success");
      navigate("/admin/categories/sub-sub-categories");
    } else {
      Swal.fire("", "Somethin went wrong", "error");
    }
  };

  return (
    <form
      onSubmit={handleAddCategory}
      className="p-4 bg-base-100 shadhow rounded sm:w-1/2"
    >
      <div className="">
        <p className="mb-1 text-neutral-content">Sub SubCategory Name</p>
        <input type="text" name="name" required />
      </div>

      <div className="mt-2">
        <p className="text-neutral-content mb-1">Category *</p>
        <select
          name="category"
          required
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {isSuccess &&
            data?.data?.map((category) => (
              <option key={category?._id} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
      </div>

      <div className="mt-2">
        <p className="text-neutral-content mb-1">Sub Category *</p>
        <select name="subCategory" required>
          <option value="">Select Sub Category</option>
          {subCategories?.length > 0 &&
            subCategories?.map((subCategory) => (
              <option key={subCategory?._id} value={subCategory?._id}>
                {subCategory?.name}
              </option>
            ))}
        </select>
      </div>

      <div className="mt-5">
        <button
          className="primary_btn text-sm"
          disabled={isLoading && "disabled"}
        >
          {isLoading ? "Loading.." : "Add Sub SubCategory"}
        </button>
      </div>
    </form>
  );
}
