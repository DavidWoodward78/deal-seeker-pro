interface Product {
    id: string;
    name: string;
    price: string;
    rating: number;
    deliverySpeed: string;
    image: string;
    link: string;
  }
  
  export default function ProductCard({ product }: { product: Product }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.deliverySpeed}</p>
        <p className="text-green-600 font-semibold">{product.price}</p>
        <p className="text-yellow-500">⭐ {product.rating}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-2 block"
        >
          View on Amazon
        </a>
      </div>
    );
  }
  