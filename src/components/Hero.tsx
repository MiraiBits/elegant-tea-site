import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Sri Lanka Tea Plantation"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
                <h2 className="text-accent uppercase tracking-[0.2em] text-sm md:text-base mb-4 animate-fade-in-up">
                    Welcome to ZLON
                </h2>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 max-w-4xl leading-tight animate-fade-in-up delay-100">
                    Pure Ceylon Tea<br />
                    <span className="italic font-light">Elegance in Every Sip</span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 animate-fade-in-up delay-200">
                    Hand-picked from the mist-covered mountains of Sri Lanka.
                    Experience the authentic taste of tradition and luxury.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                    <button className="bg-accent hover:bg-yellow-600 text-white px-8 py-4 rounded-none text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2 group">
                        Explore Collection
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-none text-lg font-medium transition-all duration-300 backdrop-blur-sm">
                        Our Story
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/50" />
            </div>
        </section>
    );
}
