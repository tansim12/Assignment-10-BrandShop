import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthContext from "../../useAuthContext";

const ProductsDetails = () => {
  const { user } = useAuthContext();
  const email = user?.email;
  const data = useLoaderData();
  const { productName, img, price, brandName, rating, type, description } =
    data;
  const addedEmailData = {
    productName,
    img,
    price,
    brandName,
    rating,
    type,
    description,
    email,
  };

  // handleAddToCart
  const handleAddToCart = async () => {
    try {
      const res = await fetch(
        "https://assingment-10-server-murex.vercel.app/cartProducts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addedEmailData),
        }
      );
      const fetchData = await res.json();
      if (fetchData.insertedId) {
        Swal.fire(
          "Successful",
          'Your product has been added to "MY Cart".',
          "success"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 pb-8 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={img}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link>
                    <button
                      onClick={handleAddToCart}
                      className=" w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700 "
                    >
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Product Name : {productName}
              </h2>

              <div className="mr-4 my-2">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Brand:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
                  {brandName}
                </span>
              </div>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {" "}
                    $ {price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Type:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {" "}
                    {type}
                  </span>
                </div>
              </div>

              <div className="my-2">
                <Rating
                  emptySymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  initialRating={rating}
                  readonly
                />
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
