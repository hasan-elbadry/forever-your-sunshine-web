
import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { cn } from '@/lib/utils';

// Placeholder images - these should be replaced with real ones
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?q=80&w=1200",
    alt: "Couple walking on beach",
    caption: "Our first vacation together"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200",
    alt: "Picnic in the park",
    caption: "That perfect summer day"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1200",
    alt: "Sunset view",
    caption: "Watching the sunset together"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=1200",
    alt: "Coffee date",
    caption: "Our favorite coffee shop"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200",
    alt: "Hiking adventure",
    caption: "That time we got lost on the trail"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1520980795552-de1c11d632a0?q=80&w=1200",
    alt: "Cooking together",
    caption: "Making your favorite pasta dish"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage);
    if (direction === 'prev') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      setSelectedImage(images[prevIndex].id);
    } else {
      const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(images[nextIndex].id);
    }
  };
  
  const selectedImageData = images.find(img => img.id === selectedImage);
  
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-semibold mb-4">Our Moments</h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Every picture tells a story of us. These are some of my favorite memories we've created together.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {images.map((image) => (
                <div 
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/5] bg-accent/20"
                  onClick={() => openModal(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="text-white" size={28} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-colors"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <img
                src={selectedImageData?.src}
                alt={selectedImageData?.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center rounded-b-lg">
                <p className="font-handwritten text-lg">{selectedImageData?.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Gallery;
