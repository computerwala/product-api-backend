import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products", query],
    queryFn: () => fetchProducts(query),
    enabled: query.length >= 3,
  });

  console.log('Fetched products:', products);
  if (isLoading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching products.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Product Search
      </h1>

      <div className="w-full max-w-2xl mb-12">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center">
        {products?.map((product) => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all w-80 hover:transform hover:-translate-y-2 hover:bg-gray-700"
          >
            <div className="w-full h-60 flex items-center justify-center overflow-hidden rounded-lg">
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                loading="lazy"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4 text-center text-white">{product.title}</h2>
            <p className="text-gray-400 text-sm mt-2 text-center">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;