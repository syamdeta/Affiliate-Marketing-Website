import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Shield } from "lucide-react";

interface HeroSectionProps {
  onBrowseClick: () => void;
}

const HeroSection = ({ onBrowseClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle pt-16 pb-16 md:pb-24">
      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Perfect Products
              </span>{" "}
              at Unbeatable Prices
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Discover curated products, exclusive deals, and fast shipping from a trusted online store.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground"
                onClick={onBrowseClick}
              >
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.8/5 Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
