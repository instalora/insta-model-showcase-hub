
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  title: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', duration = 2000, title }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (progress < duration) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(frameId);
  }, [end, duration, isInView]);

  // Format large numbers with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-display">
        {formattedCount}{suffix}
      </div>
      <p className="text-sm mt-2 text-instalora-500 dark:text-instalora-400">{title}</p>
    </div>
  );
};

export default Counter;
