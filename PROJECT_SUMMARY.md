
# ملخص مشروع موقع "الشمس للأثاث"

هذا المستند يحتوي على الكود الكامل لجميع ملفات المشروع.

---

## `index.html`

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>الشمس للأثاث المدرسي والمكتبي</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              'brand-turquoise': '#009688', // A nice teal/turquoise color
              'brand-turquoise-dark': '#00796B',
            },
            fontFamily: {
              'cairo': ['Cairo', 'sans-serif'],
            }
          }
        }
      }
    </script>
  <script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4",
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/"
  }
}
</script>
</head>
  <body class="font-cairo bg-gray-50">
    <div id="root"></div>
  </body>
</html>
```

---

## `index.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## `App.tsx`

```tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { products } from './data/products';
import type { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-turquoise mb-8">
          منتجاتنا
        </h2>
        <ProductGrid products={products} onProductSelect={handleProductSelect} />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
```

---

## `types.ts`

```ts
export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  dimensions?: string;
  materials?: string;
}
```

---

## `metadata.json`

```json
{
  "name": "Al Shams Furniture",
  "description": "A showcase website for Al Shams, a company specializing in school and office furniture. The site displays products in a clean, modern interface with details available in a modal view.",
  "requestFramePermissions": []
}
```

---

## `data/products.ts`

```ts
import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'ديسك مزدوج (Model DD02)',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'ديسك مدرسي متين مصمم لشخصين، بهيكل معدني أزرق قوي. مزود بسطح خشبي عالي الجودة ومكان مخصص لتعليق الحقائب على الجانب.',
    dimensions: 'الارتفاع: 75 سم، العرض: 120 سم، العمق: 45 سم',
    materials: 'هيكل معدني مطلي، سطح خشبي MDF معالج، خطافات فولاذية.'
  },
  {
    id: 2,
    name: 'ديسك فردي (Single Desk)',
    imageUrl: 'https://images.unsplash.com/photo-1599691035252-466b044c33c3?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'ديسك طالب عصري لشخص واحد. يتميز بهيكل معدني أزرق وتصميم بسيط وعملي يناسب جميع الفصول الدراسية.',
    dimensions: 'الارتفاع: 75 سم، العرض: 70 سم، العمق: 50 سم',
    materials: 'هيكل معدني، سطح خشبي مقاوم للخدش.'
  },
  {
    id: 3,
    name: 'كرسي طلاب - أصفر (Model CHD01)',
    imageUrl: 'https://images.unsplash.com/photo-1596423234251-63428f528a4c?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'كرسي مدرسي متين ومريح. مصمم لتوفير الدعم للطلاب خلال ساعات الدراسة الطويلة. متوفر بألوان متعددة.',
    dimensions: 'ارتفاع المقعد: 45 سم',
    materials: 'مقعد وظهر من البلاستيك المقوى، أرجل معدنية قوية.'
  },
  {
    id: 4,
    name: 'كرسي طلاب - رمادي (Model CHD01)',
    imageUrl: 'https://images.unsplash.com/photo-1606823729583-30541355181b?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'كرسي مدرسي متين ومريح. مصمم لتوفير الدعم للطلاب خلال ساعات الدراسة الطويلة. متوفر بألوان متعددة.',
    dimensions: 'ارتفاع المقعد: 45 سم',
    materials: 'مقعد وظهر من البلاستيك المقوى، أرجل معدنية قوية.'
  },
  {
    id: 5,
    name: 'كرسي طلاب - أحمر (Model CHD01)',
    imageUrl: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'كرسي مدرسي متين ومريح. مصمم لتوفير الدعم للطلاب خلال ساعات الدراسة الطويلة. متوفر بألوان متعددة.',
    dimensions: 'ارتفاع المقعد: 45 سم',
    materials: 'مقعد وظهر من البلاستيك المقوى، أرجل معدنية قوية.'
  },
  {
    id: 6,
    name: 'كرسي محاضرات (Tablet Chair)',
    imageUrl: 'https://images.unsplash.com/photo-1549499252-3c85c2c54b68?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'حل عملي لقاعات المحاضرات، يجمع بين مقعد مريح وطاولة كتابة جانبية. مزود بسلة تخزين سفلية (Wire Basket) للكتب والأغراض.',
    dimensions: 'ارتفاع المقعد: 46 سم',
    materials: 'مقعد بلاستيكي، هيكل معدني، سطح كتابة خشبي، سلة معدنية.'
  },
  {
    id: 7,
    name: 'ديسك خشبي مزدوج (Wooden Bench Desk)',
    imageUrl: 'https://images.unsplash.com/photo-1604115904323-b1b072548542?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'ديسك كلاسيكي بتصميم يجمع بين الأصالة والمتانة. يتكون من سطح خشبي متصل بمقعد طويل وهيكل معدني أسود، مع رف تخزين داخلي.',
    dimensions: 'الارتفاع: 76 سم، العرض: 150 سم',
    materials: 'خشب طبيعي، هيكل معدني أسود.'
  },
   {
    id: 8,
    name: 'طاولة اجتماعات (Meeting Table)',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&h=400&auto=format&fit=crop',
    description: 'طاولة اجتماعات أنيقة وفاخرة، مثالية للمكاتب وغرف المعلمين. تأتي مع طقم كراسي زرقاء مريحة لإضفاء مظهر احترافي.',
    dimensions: 'الطول: 240 سم، العرض: 120 سم',
    materials: 'سطح خشبي مصقول، أرجل معدنية، كراسي من القماش والمعدن.'
  }
];
```

---

## `components/Header.tsx`

```tsx
import React from 'react';

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <SunIcon className="w-8 h-8 text-brand-turquoise" />
          <h1 className="text-3xl font-bold text-brand-turquoise">
            الشمس للأثاث
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

---

## `components/Hero.tsx`

```tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-800 h-[50vh] flex items-center justify-center text-white">
      <img
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
        alt="أثاث مدرسي ومكتبي"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          أثاث يلهم الإبداع
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          حلول متكاملة للمدارس والمكاتب من الشمس
        </p>
      </div>
    </div>
  );
};

export default Hero;
```

---

## `components/ProductGrid.tsx`

```tsx
import React from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={() => onProductSelect(product)} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;
```

---

## `components/ProductCard.tsx`

```tsx
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 group"
      onClick={onClick}
    >
      <div className="relative h-64">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-4 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-800 text-center">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
```

---

## `components/ProductModal.tsx`

```tsx
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
```

---

## `components/Footer.tsx`

```tsx
import React from 'react';

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


const Footer: React.FC = () => {
  // Replace with the actual phone number
  const whatsappNumber = "201234567890"; 
  const whatsappMessage = encodeURIComponent("أريد معرفة المزيد من التفاصيل والمقاسات عن منتجاتكم.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-100 text-center py-10 px-4 mt-auto">
      <div className="container mx-auto">
        <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
          المصنع على أتم الاستعداد لتجهيز كامل كل ما يخص الأثاث المكتبي للمدارس والمكاتب.
        </p>
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <WhatsAppIcon className="w-6 h-6"/>
          <span>لمعرفة التفاصيل والمقاسات تواصل معنا عبر الواتساب</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
```
