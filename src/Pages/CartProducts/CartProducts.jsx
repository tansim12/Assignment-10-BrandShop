import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const CartProducts = () => {
  const data = useLoaderData();
  const [remainingData, setRemainingData] = useState(data);
  //   handleCartDelete
  const handleCartDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:5000/cartProducts/${_id}`, {
            method: "DELETE",
          });
          const fetchData = await res.json();
          console.log(fetchData);
          if (fetchData.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remain = data.filter((item) => item._id !== _id);
            setRemainingData(remain);
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
  return (
    <section className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8 py-5">
      {remainingData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {remainingData?.map((item) => (
            <div key={item?._id}>
              <div>
                <img src={item?.img} alt="" />
              </div>
              <div>
                <p className="my-3">
                  <span className="font-bold">Product Name</span> :{" "}
                  {item?.productName}
                </p>
                <p className="my-3">
                  <span className="font-bold">Price :</span> $ {item?.price}
                </p>
              </div>
              <button
                onClick={() => handleCartDelete(item?._id)}
                className="btn w-full text-3xl btn-error"
              >
                <MdDeleteForever></MdDeleteForever>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <span className=" text-3xl md:text-5xl  justify-center flex flex-col  text-center font-extrabold min-h-[40vh] items-center">
          There is no Products,
          <span className="text-neutral">please retry</span>
        </span>
      )}
    </section>
  );
};

export default CartProducts;
