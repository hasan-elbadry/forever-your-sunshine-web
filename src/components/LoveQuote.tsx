
import { useState, useEffect } from 'react';

const quotes = [
  "In a world full of people, my eyes will always search for you.",
  "Every moment spent with you is like a beautiful dream that I never want to wake up from.",
  "You're my favorite notification.",
  "My favorite place is inside your hug.",
  "If I know what love is, it's because of you.",
  "You're my sunshine on a cloudy day.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "You make my heart smile.",
  "I love you more than yesterday, less than tomorrow.",
  "You are my today and all of my tomorrows."
];

const LoveQuote = () => {
  const [quote, setQuote] = useState("");
  
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);
  
  return (
    <div className="my-8 max-w-lg mx-auto text-center">
      <blockquote className="relative p-6">
        <div className="font-handwritten text-xl md:text-2xl text-primary/90 italic">
          {quote}
        </div>
      </blockquote>
    </div>
  );
};

export default LoveQuote;
