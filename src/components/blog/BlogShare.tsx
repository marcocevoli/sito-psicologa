'use client';

import { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';

interface BlogShareProps {
  title: string;
  url: string;
}

export default function BlogShare({ title, url }: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${url}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback to copy to clipboard
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors"
      aria-label="Condividi articolo"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span>Copiato!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span>Condividi</span>
        </>
      )}
    </button>
  );
}



