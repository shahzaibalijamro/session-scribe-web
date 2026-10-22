import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const FloatingIconsNav = () => {
    const location = useLocation();

    console.log(location.pathname);
    
    const navItems = [
        { icon: Facebook, label: 'Facebook', color: 'bg-[#4267B2]', link: 'https://www.facebook.com/profile.php?id=61578627416582'  },
        { icon: FaXTwitter, label: 'X', color: 'bg-[#333]', link: 'https://x.com/sessionscribe' },
        { icon: Instagram, label: 'Instagram', color: 'bg-[#E1306C]', link: 'https://www.instagram.com/sessionscribe.ai?utm_source=qr&igsh=MThqcXBoczVpanA1Yg==' },
        { icon: Linkedin, label: 'Linkedin', color: 'bg-[#2867B2]', link: 'https://www.linkedin.com/company/107855502/admin/dashboard/' },
        { icon: FaTiktok, label: 'Tiktok', color: 'bg-[#333]', link: 'https://www.tiktok.com/@sessionscribe.ai6?_t=ZS-8yGKtVc1KhU&_r=1' },
        { icon: Youtube, label: 'Youtube', color: 'bg-[#ff0000]', link: 'https://www.youtube.com/@SessionScribe' }
    ];

    return (
        <nav className={`fixed ${location.pathname === '/' ? 'right-[2px]' : 'right-[15px]'} top-[60%] -translate-y-1/2 z-[1000] scale-[0.8] origin-right`}>
            <ul className="space-y-[2px]">
                {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <li
                            key={index}
                            className="group cursor-pointer relative w-[48px] h-[48px] overflow-visible transition-all duration-300"
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative flex items-center justify-center h-full text-white ${item.color} shadow-md rounded-l-md`}
                            >
                                {/* Hover Label */}
                                <span className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-xs font-semibold uppercase tracking-wider rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {item.label}
                                </span>
                                <IconComponent size={20} className="min-w-[20px]" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>

    );
};

export default FloatingIconsNav;
