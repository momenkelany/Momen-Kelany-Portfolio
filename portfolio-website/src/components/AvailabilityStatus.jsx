
import React, { useState, useEffect } from 'react';
import { Badge } from './ui/badge';
import { Circle } from 'lucide-react';

const AvailabilityStatus = ({ className = "" }) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [nextAvailable, setNextAvailable] = useState(null);

  useEffect(() => {
    // You can update this logic based on your actual availability
    // For now, let's make it dynamic based on current date
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    
    // Available Monday-Friday, 9 AM - 6 PM (adjust to your timezone)
    const isWorkingHours = dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour <= 18;
    setIsAvailable(isWorkingHours);
    
    if (!isWorkingHours) {
      // Calculate next availability
      const nextMonday = new Date(now);
      const daysUntilMonday = (8 - dayOfWeek) % 7 || 7;
      nextMonday.setDate(now.getDate() + daysUntilMonday);
      nextMonday.setHours(9, 0, 0, 0);
      setNextAvailable(nextMonday);
    }
  }, []);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge 
        variant={isAvailable ? "default" : "secondary"}
        className={`flex items-center gap-2 ${
          isAvailable 
            ? "bg-green-500 hover:bg-green-600 text-white" 
            : "bg-gray-500 hover:bg-gray-600 text-white"
        }`}
      >
        <Circle 
          size={8} 
          className={`fill-current ${isAvailable ? "text-green-200" : "text-gray-200"}`} 
        />
        {isAvailable ? "Available for Work" : "Currently Busy"}
      </Badge>
      {!isAvailable && nextAvailable && (
        <span className="text-xs text-muted-foreground">
          Next available: {nextAvailable.toLocaleDateString()}
        </span>
      )}
    </div>
  );
};

export default AvailabilityStatus;
