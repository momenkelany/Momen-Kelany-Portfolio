
import React, { useState, useRef, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height,
  placeholder = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`} style={{ width, height }}>
      {placeholder && !isLoaded && !error && (
        <Skeleton 
          className="absolute inset-0 w-full h-full rounded-md" 
          style={{ width, height }}
        />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            transition-opacity duration-300 
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${error ? 'hidden' : ''}
            ${className}
          `}
          loading="lazy"
          {...props}
        />
      )}
      
      {error && (
        <div 
          className="flex items-center justify-center bg-muted text-muted-foreground rounded-md"
          style={{ width, height }}
        >
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
