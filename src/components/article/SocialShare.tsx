import React from 'react';
import { Facebook, Twitter, Linkedin, Link } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 bg-white rounded-full shadow-lg hover:text-gold transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 bg-white rounded-full shadow-lg hover:text-gold transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 bg-white rounded-full shadow-lg hover:text-gold transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <button
        onClick={copyToClipboard}
        className="block p-2 bg-white rounded-full shadow-lg hover:text-gold transition-colors"
      >
        <Link className="w-6 h-6" />
      </button>
    </div>
  );
}