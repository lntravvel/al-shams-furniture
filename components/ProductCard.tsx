
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-sm scale-[1.02]"></div>

      {/* Card Content */}
      <div className="relative bg-white rounded-3xl overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-6 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

          {/* Product Image */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-lg"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
            <span className="px-6 py-3 bg-white/90 backdrop-blur-sm text-teal-600 font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
              عرض التفاصيل
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Card Info */}
        <div className="p-6 relative">
          {/* Decorative Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h3 className="text-lg font-bold text-gray-800 text-center group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>

          {/* Quick Info Pills */}
          <div className="flex justify-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="px-3 py-1 bg-teal-50 text-teal-600 text-xs font-medium rounded-full">جودة عالية</span>
            <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">ضمان سنة</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
