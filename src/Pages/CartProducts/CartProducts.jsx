import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuthContext from "../../useAuthContext";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const CartProducts = () => {
  const { user } = useAuthContext();
  const [remainingData, setRemainingData] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/cartProducts?email=${user?.email}` , {withCredentials:true})
        .then((result) => setRemainingData(result.data))
        .catch((err) => toast.error(err.message));
    }
  }, [user]);

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
          if (fetchData.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remain = remainingData.filter((item) => item._id !== _id);
            setRemainingData(remain);
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
  return (
    <section className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8 pt-28 min-h-[90vh]">
      {remainingData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {remainingData?.map((item) => (
            <div
              key={item?._id}
              className="border p-3 border-neutral rounded-lg flex flex-col"
            >
              <div className="flex-grow">
                <img src={item?.img} alt="" />
              </div>

              <div className="flex-grow">
                <p className="my-3">
                  <span className="font-bold">Product Name</span> :{" "}
                  <span className="text-sm">{item?.productName}</span>
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
      <Toaster></Toaster>
    </section>
  );
};

export default CartProducts;
