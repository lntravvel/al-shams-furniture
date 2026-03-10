
import React, { useEffect } from 'react';
import type { Product } from '../types';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.506-5.613-1.459l-6.265 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-.962 3.525 3.612-.955z"/>
    </svg>
);

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const whatsappNumber = "201234567890"; 
    const whatsappMessage = encodeURIComponent(`أهلاً، أريد معرفة المزيد من التفاصيل والمقاسات عن منتج: ${product.name}`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="flex-shrink-0">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold text-brand-turquoise mb-4">{product.name}</h2>
              <button 
                onClick={onClose} 
                className="text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 space-y-4 text-gray-700">
            <p>{product.description}</p>
            {product.dimensions && (
                <div>
                    <h4 className="font-bold text-gray-800">الأبعاد:</h4>
                    <p>{product.dimensions}</p>
                </div>
            )}
            {product.materials && (
                 <div>
                    <h4 className="font-bold text-gray-800">المواد المصنعة:</h4>
                    <p>{product.materials}</p>
                </div>
            )}
          </div>
          
          <div className="mt-6 flex-shrink-0">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white font-bold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="w-6 h-6"/>
              <span>اطلب عبر الواتساب</span>
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
