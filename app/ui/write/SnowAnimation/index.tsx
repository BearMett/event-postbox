"use client";
import { useEffect, useState } from 'react';

export default function SnowAnimation() {
  const [elements, setElements] = useState<Array<{
    type: 'snow' | 'star';
    style: React.CSSProperties;
    symbol: string;
    id: number;
  }>>([]);

  useEffect(() => {
    const stars = [...Array(15)].map((_, i) => ({
      type: 'star' as const,
      style: {
        '--twinkle-duration': `${Math.random() * 2 + 1}s`,
        '--star-pos': `${Math.random() * 100}%`,
        '--star-top': `${Math.random() * 100}%`,
      } as React.CSSProperties,
      symbol: ['⭐', '✨', ''][Math.floor(Math.random() * 3)],
      id: i,
    }));

    setElements(stars);

    let currentSnow = 0;
    const totalSnow = 20;

    const snowInterval = setInterval(() => {
      if (currentSnow >= totalSnow) {
        clearInterval(snowInterval);
        return;
      }

      const snowId = stars.length + currentSnow;
      setElements(prev => [...prev, {
        type: 'snow',
        style: {
          '--fall-duration': `${Math.random() * 3 + 4}s`,
          '--start-pos': `${Math.random() * 100}%`,
          opacity: 0,
          animation: `snowfall var(--fall-duration) linear infinite, fadeIn 0.5s ease-in forwards`,
        } as React.CSSProperties,
        symbol: ['❄️', '❅', '❆'][Math.floor(Math.random() * 3)],
        id: snowId,
      }]);

      currentSnow++;
    }, 200);

    return () => clearInterval(snowInterval);
  }, []);

  return (
    <div className="animation-container">
      {elements.map((element) => (
        <div
          key={element.id}
          className={element.type === 'snow' ? 'snowflake' : 'star'}
          style={element.style}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  );
} 