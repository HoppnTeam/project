import React from 'react';
import { Image, Download, Share2 } from 'lucide-react';

interface PhotoGalleryProps {
  filter: string;
}

export default function PhotoGallery({ filter }: PhotoGalleryProps) {
  const photos = [
    {
      id: 1,
      title: "Climate Summit 2024",
      photographer: "David Wilson",
      image: "https://images.unsplash.com/photo-1623177623442-979c1e42c255?auto=format&fit=crop&w=800",
      category: "news",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Cultural Festival",
      photographer: "Emma Thompson",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800",
      category: "culture",
      date: "2024-03-14"
    }
  ];

  const filteredPhotos = filter === 'all'
    ? photos
    : photos.filter(photo => photo.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPhotos.map((photo) => (
        <div key={photo.id} className="group relative">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-4">
              <button className="p-2 bg-white rounded-full text-black hover:text-gold transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white rounded-full text-black hover:text-gold transition-colors">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white rounded-full text-black hover:text-gold transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <h3 className="font-semibold">{photo.title}</h3>
            <p className="text-sm text-gray-600">
              By {photo.photographer} • {photo.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}