import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span className="text-sm font-medium tracking-wide">Built with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span className="text-sm font-medium tracking-wide">by Engineers from</span>
          <span className="text-sm font-bold text-purple-600">
            NITW
          </span>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-2 flex items-center justify-center gap-8 opacity-40">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rounded-full bg-primary/20" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;