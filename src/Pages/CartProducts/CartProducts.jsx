import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

import useAuthContext from "../../useAuthContext";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinar from "../../Components/LoadingSpinar/LoadingSpinar";

const CartProducts = () => {
  const { user } = useAuthContext();

  // update tanStack query
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["cartProducts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://assingment-10-server-murex.vercel.app/cartProducts?email=${user?.email}`,
        {
          withCredentials: true,
        }
      );
      const fetchData = await res.data;
      return fetchData;
    },
  });

  if (isLoading) {
    <LoadingSpinar></LoadingSpinar>;
  }

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
          const res = await fetch(
            `https://assingment-10-server-murex.vercel.app/cartProducts/${_id}`,
            {
              method: "DELETE",
            }
          );
          const fetchData = await res.json();
          if (fetchData.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
  return (
    <section className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8 pt-28 min-h-[90vh]">
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.map((item) => (
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
