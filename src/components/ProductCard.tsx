import Image from "next/image";
import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";

interface ProductCardProps {
    id: string;
    name: string;
    weight: string;
    price: string;
    rating?: number;
    image?: string;
    isPopular?: boolean;
}

export default function ProductCard({
    name,
    weight,
    price,
    rating = 5,
    image = "/images/tea-placeholder.png", // Fallback
    isPopular = false,
}: ProductCardProps) {
    return (
        <div className="group relative bg-[#F9F9F5] border border-gray-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-sm overflow-visible">

            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full z-10 shadow-md">
                    BEST SELLER
                </div>
            )}

            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-gray-100 rounded-sm">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />

                {/* Overlay with Quick Action */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-primary px-6 py-3 rounded-none font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-accent hover:text-white">
                        Quick View
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-2">
                <div className="flex justify-center text-accent mb-1">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                    ))}
                </div>

                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {name}
                </h3>

                <p className="text-gray-500 text-sm font-medium tracking-wide">
                    {weight}
                </p>

                <div className="flex items-center justify-center gap-4 mt-4">
                    <span className="text-lg font-bold text-primary">{price}</span>
                    <button className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                        <ShoppingBag size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
