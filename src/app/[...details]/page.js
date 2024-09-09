import { fetchProductDetails } from "@/action";
import { AddToCardButton } from "../../components/add-to-cart-button";

export default async function Details({ params }) {
  const { details } = params;
  const res = await fetchProductDetails(details);
  const data = res?.data;

  return (
    <div className="p-6 bg-white max-w-4xl mx-auto mt-10 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={data.images[0]}
            alt={data.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-10 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{data.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold text-gray-900">
              ${data.price}
            </span>
            <span className="ml-4 text-green-500">
              {data.discountPercentage}% off
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Category: {data.category}
          </p>
          <p className="text-sm text-gray-500 mb-4">Brand: {data.brand}</p>
          <p className="text-sm text-gray-500 mb-4">SKU: {data.sku}</p>
          <p className="text-sm text-gray-500 mb-4">Weight: {data.weight}g</p>
          <p className="text-sm text-gray-500 mb-4">
            Stock: {data.availabilityStatus}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Warranty: {data.warrantyInformation}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Shipping: {data.shippingInformation}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Return Policy: {data.returnPolicy}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Minimum Order: {data.minimumOrderQuantity}
          </p>
          <AddToCardButton productItem={data} />
        </div>
      </div>
    </div>
  );
}
