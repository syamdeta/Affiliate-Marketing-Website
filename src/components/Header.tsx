import { Search, ShoppingBag, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <ShoppingBag className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">Gadgets Bazar</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Perfect Products</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 bg-background border-border focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">4.8</span>
            <span>Trusted Store</span>
          </div>
          <a
  href="https://chat.whatsapp.com/invitecode" // replace with your group invite link
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Join our WhatsApp group"
  className="flex h-9 w-9 items-center justify-center transition-transform duration-200 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-9 w-9"
  >
    <path
      fill="#25D366"
      d="M16 0C7.163 0 0 7.163 0 16c0 2.82.734 5.45 2.02 7.73L0 32l8.49-2.23A15.94 15.94 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0"
    />
    <path
      fill="#FFF"
      d="M24.26 19.1c-.37-.185-2.19-1.08-2.53-1.2-.34-.124-.59-.185-.84.186-.25.37-.96 1.2-1.18 1.45-.22.25-.435.28-.805.093-.37-.186-1.56-.574-2.97-1.83-1.1-.98-1.84-2.2-2.06-2.57-.22-.37-.023-.57.166-.75.17-.166.37-.435.56-.65.19-.22.25-.37.37-.62.124-.25.062-.465-.03-.65-.094-.186-.84-2.02-1.15-2.77-.3-.73-.61-.63-.84-.64-.22-.01-.465-.01-.715-.01-.25 0-.65.093-.99.465-.34.37-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.186.25 2.62 4 6.34 5.62.89.384 1.59.61 2.13.78.89.28 1.7.24 2.34.146.71-.106 2.19-.89 2.5-1.75.31-.86.31-1.6.22-1.75-.094-.15-.34-.25-.71-.435"
    />
  </svg>
</a>

        </div>
      </div>
    </header>
  );
};

export default Header;