
import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Sample love notes data
const notes = [
  {
    id: 1,
    title: "When I First Saw You",
    content: "I still remember the first time our eyes met. There was something different about you - something that made time slow down and the world around us fade away. That moment is forever etched in my heart.",
    date: "The beginning"
  },
  {
    id: 2,
    title: "What I Love About You",
    content: "Your smile that brightens my darkest days. The way you laugh at my terrible jokes. How you care so deeply about others. Your determination when facing challenges. Your kindness that knows no bounds. Everything about you makes my heart full.",
    date: "Every day"
  },
  {
    id: 3,
    title: "Thank You",
    content: "Thank you for being my rock, my confidant, and my best friend. Thank you for loving me on my difficult days and celebrating with me on my best ones. Thank you for choosing me, every single day.",
    date: "Forever grateful"
  },
  {
    id: 4,
    title: "My Promise",
    content: "I promise to be your partner in all of life's adventures. To support your dreams as fiercely as my own. To love you completely and without reservation. To choose us, every day, through whatever life brings our way.",
    date: "Today and always"
  },
  {
    id: 5,
    title: "You Are My Home",
    content: "Wherever you are is where I feel most at peace. You've taught me that home isn't a place—it's a feeling. And I've never felt more at home than when I'm with you.",
    date: "In my heart"
  }
];

const Notes = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-semibold mb-4">Love Notes</h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Words from my heart to yours — little reminders of how much you mean to me.
              </p>
            </div>
            
            <div className="space-y-6">
              {notes.map((note) => (
                <div key={note.id} className="bg-white/50 backdrop-blur-sm rounded-xl shadow-md overflow-hidden paper-texture">
                  <div 
                    className="px-6 py-5 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpand(note.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Heart 
                        size={18} 
                        className={cn(
                          "text-primary transition-all duration-300",
                          expandedId === note.id ? "scale-110" : ""
                        )}
                        fill={expandedId === note.id ? "currentColor" : "none"}
                      />
                      <h3 className="font-display text-xl">{note.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">{note.date}</span>
                      {expandedId === note.id ? (
                        <ChevronUp size={18} className="text-primary" />
                      ) : (
                        <ChevronDown size={18} className="text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  
                  {expandedId === note.id && (
                    <>
                      <Separator className="w-[94%] mx-auto bg-primary/10" />
                      <div className="px-6 py-4">
                        <p className="text-foreground/80 font-sans leading-relaxed first-letter:text-2xl first-letter:font-handwritten">
                          {note.content}
                        </p>
                        <div className="mt-4 text-right">
                          <span className="font-handwritten text-primary/80">With all my love</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Notes;
