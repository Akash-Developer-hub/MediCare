import React from 'react';
import { Plus, MinusCircle, PlusCircle, Presentation as Prescription } from 'lucide-react';
import { clsx } from 'clsx';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantity,
  onAddToCart,
  onUpdateQuantity,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
        {product.requiresPrescription && (
          <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center text-xs">
            <Prescription className="h-3 w-3 mr-1" />
            Prescription
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.dosage}</p>
        <p className="text-lg font-bold text-blue-600 mb-3">${product.price.toFixed(2)}</p>
        
        {quantity === 0 ? (
          <button
            onClick={onAddToCart}
            disabled={!product.inStock}
            className={clsx(
              "w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2",
              "transition-colors duration-200",
              product.inStock
                ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
          >
            <Plus className="h-4 w-4" />
            <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <button
              onClick={() => onUpdateQuantity(quantity - 1)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <MinusCircle className="h-5 w-5" />
            </button>
            <span className="font-medium text-gray-900">{quantity}</span>
            <button
              onClick={() => onUpdateQuantity(quantity + 1)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;