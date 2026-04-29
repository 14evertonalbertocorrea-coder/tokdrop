import React from 'react';
import { cn } from '../lib/utils';

interface AdBannerProps {
  className?: string;
  label?: string;
}

export default function AdBanner({ className, label = "ADVERTISING SPACE" }: AdBannerProps) {
  return (
    <div className={cn("w-full flex justify-center py-2 shrink-0", className)}>
      <div className="w-full max-w-[728px] h-20 border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400 rounded-lg mx-4">
        <div className="relative text-center">
          <span className="uppercase tracking-widest">
              {label}
          </span>
        </div>
      </div>
    </div>
  );
}
