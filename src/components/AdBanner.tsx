import React, { useEffect } from 'react';
import { cn } from '../lib/utils';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdBannerProps {
  className?: string;
  label?: string;
}

export default function AdBanner({ className, label = 'Publicidade' }: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {}
  }, []);

  return (
    <div className={cn('w-full flex justify-center py-4', className)}>
      <div className="w-full max-w-[728px] min-h-[90px] bg-slate-50 border border-dashed border-slate-300 rounded-xl mx-4 flex flex-col items-center justify-center overflow-hidden">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
          {label}
        </span>

        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
