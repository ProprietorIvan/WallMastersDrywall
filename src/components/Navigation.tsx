import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

interface ContactButtonProps {
  href: string;
  textToCopy: string;
  icon: React.ReactNode;
  text: string;
  fullWidth?: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  href,
  textToCopy,
  icon,
  text,
  fullWidth = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`group relative inline-flex items-center gap-2 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors ${
        fullWidth ? "w-full justify-center" : ""
      }`}
    >
      {icon}
      <a href={href}>{text}</a>
      <span
        className={`absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        <Check className="h-3 w-3" />
      </span>
    </button>
  );
};

const Navigation = ({
  currentPage,
  showActions = true,
  transparent = false,
}: NavigationProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomepage = router.pathname === "/" || router.pathname === "";
  const isDrywallPage = router.pathname === "/drywall";

  const phoneNumber = "(778) 907-4485";
  const phoneNumberClean = "7789074485";
  const email = "info@drywallvan.ca";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isHomepage
    ? [{ text: "Services", url: "/drywall" }]
    : [
        { text: "Home", url: "/" },
        { text: "Services", url: "/drywall" },
      ];

  const navClasses = `
    w-full z-50 transition-all duration-300
    ${isHomepage ? "lg:absolute bg-white lg:bg-transparent" : "bg-white"}
    ${!isHomepage && isScrolled ? "shadow-lg" : ""}
    lg:fixed
  `;

  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "Drywall Repair", href: "/drywall-repair" },
    { name: "Drywall Installation", href: "/drywall-installation" },
    { name: "Texture Matching", href: "/texture-matching" },
    { name: "Commercial Drywall", href: "/commercial-drywall" },
    { name: "Burnaby Drywall", href: "/burnaby-drywall" },
  ];

  return (
    <nav className={navClasses}>
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-36">
              <Image
                src="/logo.webp"
                alt="WallMasters Drywall Vancouver"
                fill
                sizes="144px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Contact Info Bar - Always visible */}
        <div className="px-4 py-3 bg-gray-50">
          <div className="space-y-2">
            <ContactButton
              href={`tel:${phoneNumberClean}`}
              textToCopy={phoneNumberClean}
              icon={
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
              }
              text={phoneNumber}
            />
            <ContactButton
              href={`mailto:${email}`}
              textToCopy={email}
              icon={
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              }
              text={email}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="block px-4 py-3 text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-48">
              <Image
                src="/logo.webp"
                alt="WallMasters Drywall Vancouver"
                fill
                sizes="192px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={`text-base font-medium ${
                  isHomepage
                    ? "text-white hover:text-yellow-400"
                    : "text-gray-900 hover:text-yellow-600"
                } transition-colors`}
              >
                {link.text}
              </Link>
            ))}

            <div className="flex items-center gap-8 pl-8 border-l border-gray-200">
              <ContactButton
                href={`tel:${phoneNumberClean}`}
                textToCopy={phoneNumberClean}
                icon={<Phone className="w-5 h-5" />}
                text={phoneNumber}
              />
              <ContactButton
                href={`mailto:${email}`}
                textToCopy={email}
                icon={<Mail className="w-5 h-5" />}
                text={email}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600"
          >
            Home
          </Link>
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600"
            >
              {service.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600"
          >
            Contact
          </Link>
          <div className="mt-4 space-y-2">
            <ContactButton
              href={`tel:${phoneNumberClean}`}
              textToCopy={phoneNumberClean}
              icon={<Phone className="w-4 h-4" />}
              text={phoneNumber}
              fullWidth
            />
            <ContactButton
              href={`mailto:${email}`}
              textToCopy={email}
              icon={<Mail className="w-4 h-4" />}
              text={email}
              fullWidth
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
