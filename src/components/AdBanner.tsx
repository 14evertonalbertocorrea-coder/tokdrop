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
    <div className={cn('w-full flex justify-center py-6', className)}>
      <div className="w-full max-w-[728px] min-h-[90px] mx-4">
        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300 text-center mb-2">
          {label}
        </div>

        <div className="w-full min-h-[90px] rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
          <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: '90px' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          <div className="text-xs text-slate-300 font-semibold">
            Espaço reservado para anúncio
          </div>
        </div>
      </div>
    </div>
  );
}
