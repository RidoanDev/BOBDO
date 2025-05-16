import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Code2,
  ArrowUp,
  Home,
  Droplet as BloodDrop,
  HandHeart,
  HeartHandshake,
  Bell,
  BookOpen,
  Info,
  Phone,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { scrollToTop } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 transition-transform hover:scale-105"
          onClick={() => scrollToTop()}
        >
          <img 
            src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
            alt="BOBDO Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-2xl font-bold text-blood-600">BOBDO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://ridoan-zisan.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blood-600 transition-colors"
                >
                  <Code2 className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Developer Info</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-blood-50"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLinks />
          <a
            href="https://ridoan-zisan.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-700 hover:text-blood-600 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Code2 className="h-5 w-5" />
            <span>Developer Info</span>
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
     {showScrollTop && (
  <Button
    variant="secondary"
    size="icon"
    className="fixed bottom-4 right-4 rounded-full shadow-lg bg-blood-600 text-white hover:bg-blood-700"
    onClick={scrollToTop}
  >
    <ArrowUp className="h-5 w-5" />
  </Button>
)}
    </header>
  );
};


const NavLinks = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClass = (path: string) => `
    relative flex items-center gap-2 text-gray-700 hover:text-blood-600 font-medium transition-colors py-2
    ${
      isActive(path)
        ? 'text-blood-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blood-600'
        : ''
    }
  `;

  return (
    <>
      <Link to="/" className={linkClass('/')}>
        <Home className="h-4 w-4" />
        <span>হোম</span>
      </Link>
      <Link to="/donate-blood" className={linkClass('/donate-blood')}>
        <BloodDrop className="h-4 w-4" />
        <span>রক্ত দিন</span>
      </Link>
      <Link to="/get-blood" className={linkClass('/get-blood')}>
        <BloodDrop className="h-4 w-4" />
        <span>রক্ত নিন</span>
      </Link>
      <Link to="/be-a-volunteer" className={linkClass('/be-a-volunteer')}>
        <HandHeart className="h-4 w-4" />
        <span>স্বেচ্ছাসেবক</span>
      </Link>
      <Link to="/donate" className={linkClass('/donate')}>
        <HeartHandshake className="h-4 w-4" />
        <span>আর্থিক অনুদান</span>
      </Link>
      <Link to="/hospitals" className={linkClass('/hospitals')}>
        <Building2 className="h-4 w-4" />
        <span>হাসপাতাল</span>
      </Link>
      <Link to="/notice" className={linkClass('/notice')}>
        <Bell className="h-4 w-4" />
        <span>নোটিশ</span>
      </Link>
      <Link to="/medical-knowledge" className={linkClass('/medical-knowledge')}>
        <BookOpen className="h-4 w-4" />
        <span>চিকিৎসা জ্ঞান</span>
      </Link>
      <Link to="/about-us" className={linkClass('/about-us')}>
        <Info className="h-4 w-4" />
        <span>আমাদের সম্পর্কে</span>
      </Link>
      <Link to="/contacts" className={linkClass('/contacts')}>
        <Phone className="h-4 w-4" />
        <span>যোগাযোগ</span>
      </Link>
    </>
  );
};

export default Header;
