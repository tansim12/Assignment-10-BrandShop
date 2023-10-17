import { useState } from "react";

const AddProducts = () => {
    const [changeValue , setChangeValue] = useState("")
    // handleBrandValue
    const handleBrandValue =e=>{
        const newValue = e.target.value 
        console.log(newValue);
    }
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/8BJBcfX/cool-background-2.png)",
      }}
      className="min-h-[90vh]"
    >
      <div className="flex justify-center items-center min-h-[100vh] sm:p-0 p-3 py-4">
        <div>
          <h1 className="text-4xl text-center my-4 font-extrabold  bg-clip-text text-neutral">
            Add Your Products
          </h1>

          <form>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Product Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
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
                className="select select-secondary w-full max-w-xs">
                  <option disabled selected>
                    Select your brand name
                  </option>
                  <option value={"Intel"}>Intel</option>
                  <option value={"Samsung"}>Samsung</option>
                  <option value={"Apple"} >Apple</option>
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
                    type="text"
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
                    name="rating"
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
                    placeholder="url"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <button className="btn btn-neutral w-full my-5">Add </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProducts;
