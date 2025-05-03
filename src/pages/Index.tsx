
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import LoveQuote from '@/components/LoveQuote';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay for the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Header section */}
            <div className="text-center mb-8">
              <div className="inline-block p-2 bg-secondary/40 rounded-full mb-4 animate-float">
                <Heart size={28} className="text-primary" />
              </div>
              <h1 className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Forever Your Sunshine
              </h1>
              <p className={`font-handwritten text-xl md:text-2xl text-primary/80 mb-6 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                A space where our love story lives on
              </p>
            </div>
            
            {/* Main message */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 mb-10 relative paper-texture">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-secondary rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary rounded-full"></div>
              
              <p className="font-sans text-foreground/90 leading-relaxed mb-4 animate-fade-in animate-delay-1">
                This website was made just for you — because you're not just anyone, you're someone truly special. Every page here is a small reflection of how much you mean to me.
              </p>
              <p className="font-sans text-foreground/90 leading-relaxed mb-4 animate-fade-in animate-delay-2">
                I built this space to be more than just a site — it's a quiet love letter, a place where your smile lives, where your laughter echoes, and where my heart speaks to yours without saying a word.
              </p>
              <p className="font-sans text-foreground/90 leading-relaxed animate-fade-in animate-delay-3">
                I hope this brings you joy — the kind that lights up your face, just like you light up my life.
              </p>
            </div>
            
            {/* Quote */}
            <LoveQuote />
            
            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link to="/gallery">
                <Button variant="secondary" size="lg" className="w-48">
                  Explore Our Gallery
                </Button>
              </Link>
              <Link to="/notes">
                <Button variant="outline" size="lg" className="w-48">
                  Read My Notes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
