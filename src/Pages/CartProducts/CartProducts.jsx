import { useLoaderData } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const CartProducts = () => {
  const data = useLoaderData();
  //   handleCartDelete
  const handleCartDelete = async (_id) => {

// fetch(`http://localhost:5000/cartProducts/${_id}`,{
//     method:"DELETE"
// }).then(res=> res.json()).then(fetchData=> {
//     console.log(fetchData);
// })

    try {
      const res = await fetch(`http://localhost:5000/cartProducts/${_id}`, {
        method: "DELETE"
      });
      const fetchData = await res.json();
      console.log(fetchData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-8 py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.map((item) => (
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
              className="btn btn-outline w-full text-3xl"
            >
              <MdDeleteForever></MdDeleteForever>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartProducts;
