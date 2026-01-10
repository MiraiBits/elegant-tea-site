import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h2 className="font-serif text-3xl font-bold tracking-wider">ZLON</h2>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Premium Ceylon Tea harvested from the finest plantations in Sri Lanka. Experience the essence of purity and tradition.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-white/70 hover:text-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-white/70 hover:text-accent transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-white/70 hover:text-accent transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-accent">Discover</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/products" className="hover:text-white transition-colors">Our Collection</Link></li>
                            <li><Link href="/story" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Misty Mountains Blog</Link></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-accent">Customer Care</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-6 text-accent">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                                <span>123 Tea Estate Road,<br />Nuwara Eliya, Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent flex-shrink-0" />
                                <span>+94 77 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent flex-shrink-0" />
                                <span>info@zlontea.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ZLON Tea. All rights reserved.</p>
                    <p>Designed with elegance.</p>
                </div>
            </div>
        </footer>
    );
}
