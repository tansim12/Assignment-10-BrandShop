import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdateForm = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const { productName, price, description, img, type, rating, _id } = data;

  const [brandName, setBrandName] = useState("");
  // handleBrandValue
  const handleBrandValue = (e) => {
    const newValue = e.target.value;
    setBrandName(newValue);
  };

  //   handleAddProducts
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const type = e.target.type.value;
    const rating = e.target.rating.value;
    if (rating.length >= 2) {
      return toast.error("Rating dosen't up to 5");
    }
    const stR = parseFloat(rating);
    if (stR > 5) {
      return toast.error("Rating dosen't more then 5");
    }
    if (!brandName) {
      return toast.error("Please select your Brand name.");
    }
    // console.log(productName, price, description, img, type, rating, brandName);
    const products = {
      productName,
      price,
      description,
      img,
      type,
      rating,
      brandName,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be update this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.put(
            `https://assingment-10-server-murex.vercel.app/products/${brandName}/${_id}`,
            products
          );
          const fetchData = await res.data;
          if (fetchData.modifiedCount > 0) {
            Swal.fire("Update", "Your product update successfully", "success");
            navigate(-1);
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/8BJBcfX/cool-background-2.png)",
      }}
      className="min-h-[90vh] pt-20"
    >
      <div className="flex justify-center items-center min-h-[100vh] sm:p-0 p-3 py-4">
        <div>
          <h1 className="text-4xl text-center my-4 font-extrabold  bg-clip-text text-neutral">
            Update Your Products
          </h1>

          <form onSubmit={handleUpdateProduct} className="text-black">
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Product Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="productName"
                    required
                    defaultValue={productName}
                    placeholder="Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Brand Name</span>
                </label>
                <select
                  onChange={handleBrandValue}
                  className="select select-secondary w-full max-w-xs"
                >
                  <option disabled selected>
                    Select your brand name
                  </option>
                  <option value={"Intel"}>Intel</option>
                  <option value={"Samsung"}>Samsung</option>
                  <option value={"Apple"}>Apple</option>
                  <option value={"Sony"}>Sony</option>
                  <option value={"AMD"}>AMD</option>
                  <option value={"Microsoft"}>Microsoft</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    required
                    defaultValue={price}
                    placeholder="Price"
                    name="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Short description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                    required
                    placeholder="Description"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    required
                    name="rating"
                    defaultValue={rating}
                    placeholder="Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Type </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="type"
                    defaultValue={type}
                    required
                    placeholder=" phone, computer etc"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Photo Url</span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    name="img"
                    required
                    defaultValue={img}
                    placeholder="url"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-neutral w-full my-5"
              data-aos="zoom-in-down"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Toaster></Toaster>
    </section>
  );
};

export default ProductUpdateForm;
