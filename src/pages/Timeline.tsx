
import { useRef, useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import { Heart, Calendar } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { cn } from '@/lib/utils';

// Sample timeline events
const events = [
  {
    id: 1,
    title: "The First Hello",
    date: "How it all began",
    description: "The day we first met. I had no idea how important you would become to me.",
    highlight: true
  },
  {
    id: 2,
    title: "First Date",
    date: "Our beginning",
    description: "I was so nervous, but the moment I saw you, all my worries melted away. We talked for hours and I knew there was something special between us.",
    highlight: false
  },
  {
    id: 3,
    title: "Official",
    date: "Us",
    description: "The day we decided to make it official. One of the best decisions I've ever made.",
    highlight: true
  },
  {
    id: 4,
    title: "First Trip Together",
    date: "Adventures",
    description: "Exploring new places with you showed me a different side of you - your sense of adventure, your curiosity, and your ability to find joy in the smallest things.",
    highlight: false
  },
  {
    id: 5,
    title: "Moving In",
    date: "Our home",
    description: "Creating our first home together. Every corner filled with our memories and dreams.",
    highlight: true
  },
  {
    id: 6,
    title: "Today",
    date: "Present",
    description: "Every day with you is a blessing. I'm excited for all our tomorrows.",
    highlight: true
  }
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0', 10);
            if (!visibleItems.includes(id)) {
              setVisibleItems(prev => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [visibleItems]);
  
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-semibold mb-4">Our Journey</h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                The special moments that have defined our story so far.
              </p>
            </div>
            
            <div ref={timelineRef} className="relative py-6">
              {/* Timeline center line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:translate-x-[-0.5px]"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                {events.map((event, index) => (
                  <div 
                    key={event.id}
                    data-id={event.id}
                    className={cn(
                      "timeline-item relative md:flex flex-row-reverse md:items-center",
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                      visibleItems.includes(event.id) ? "opacity-100" : "opacity-0"
                    )}
                    style={{ 
                      transition: 'opacity 0.6s ease, transform 0.6s ease',
                      transitionDelay: `${event.id * 0.1}s`,
                      transform: visibleItems.includes(event.id) ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    {/* Event marker */}
                    <div className="absolute left-[-10.5px] md:left-1/2 md:transform md:translate-x-[-10.5px] z-10">
                      <div className={cn(
                        "rounded-full border-4 border-background flex items-center justify-center",
                        event.highlight ? "bg-primary w-6 h-6" : "bg-secondary w-5 h-5"
                      )}>
                        {event.highlight && <Heart size={12} className="text-white" />}
                      </div>
                    </div>
                    
                    {/* Event content */}
                    <div className={cn(
                      "ml-7 md:ml-0 md:w-[45%]",
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    )}>
                      <div className={cn(
                        "bg-white/50 backdrop-blur-sm rounded-xl p-5 shadow-sm border paper-texture",
                        event.highlight ? "border-primary/20" : "border-secondary/20"
                      )}>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={14} className="text-primary opacity-70" />
                          <span className="text-sm font-handwritten text-primary/70">{event.date}</span>
                        </div>
                        <h3 className="text-xl font-display mb-2">{event.title}</h3>
                        <p className="text-sm text-foreground/80">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Timeline;
