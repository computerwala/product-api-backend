const API_URL = import.meta.env.VITE_API_URL;


export const fetchProducts = async (query) => {
  const response = await fetch(`${API_URL}/search?query=${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};


export const fetchProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }
  return response.json();
};