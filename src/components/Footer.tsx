
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-accent/20 py-6 mt-auto">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Heart size={14} className="text-primary" fill="currentColor" />
            <span className="text-sm text-muted-foreground">Made with love, for you</span>
          </div>
          <p className="font-handwritten text-sm text-primary">Forever and always yours</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
