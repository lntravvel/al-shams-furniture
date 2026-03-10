
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">المنتج غير موجود</h1>
                    <Link to="/" className="text-teal-400 hover:underline text-lg">
                        العودة للصفحة الرئيسية
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(`مرحباً، أريد الاستفسار عن المنتج: ${product.name}`);
        window.open(`https://wa.me/201080203632?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl sticky top-0 z-50 border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-amber-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-500">
                                <span className="text-white font-bold text-xl">ش</span>
                            </div>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
                            الشمس للأثاث
                        </span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>العودة للمنتجات</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Product Image */}
                        <div className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 p-8 md:p-12 flex items-center justify-center overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="max-w-full max-h-[500px] object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                            {/* Product Name */}
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                                    {product.name}
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Specifications */}
                            <div className="space-y-4 mb-8">
                                {product.dimensions && (
                                    <div className="group flex items-start gap-4 p-5 bg-gradient-to-r from-teal-50 to-transparent rounded-2xl border border-teal-100 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
                                        <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1 text-lg">الأبعاد والمقاسات</h3>
                                            <p className="text-gray-600">{product.dimensions}</p>
                                        </div>
                                    </div>
                                )}

                                {product.materials && (
                                    <div className="group flex items-start gap-4 p-5 bg-gradient-to-r from-amber-50 to-transparent rounded-2xl border border-amber-100 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1 text-lg">المواد والخامات</h3>
                                            <p className="text-gray-600">{product.materials}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Features Pills */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">✓ جودة عالية</span>
                                <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">✓ ضمان سنة</span>
                                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">✓ توصيل سريع</span>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={handleWhatsAppClick}
                                className="group w-full py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <svg className="w-7 h-7 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span className="relative z-10">تواصل معنا عبر واتساب</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <section className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent">
                                منتجات قد تعجبك
                            </span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map((relatedProduct) => (
                            <Link
                                key={relatedProduct.id}
                                to={`/product/${relatedProduct.id}`}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-4 overflow-hidden">
                                    <img
                                        src={relatedProduct.imageUrl}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-2 group-hover:text-teal-600 transition-colors">
                                        {relatedProduct.name}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8 mt-16 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400">
                        © 2026 الشمس للأثاث المدرسي والمكتبي. جميع الحقوق محفوظة.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default ProductPage;
