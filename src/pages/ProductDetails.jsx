import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/products";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });
  
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching product details.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto border p-4 rounded-md shadow">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full h-auto max-h-96 object-contain rounded-md transition-transform duration-300 hover:scale-105" 
        />
        <h2 className="text-3xl font-bold mt-4 text-center text-gray-800">{product.title}</h2>
        <p className="text-gray-700 mt-2 text-center">{product.description}</p>
        <p className="text-2xl font-bold mt-4 text-center text-green-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;