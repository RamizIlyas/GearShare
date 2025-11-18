import { MapPin, Star, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface ToolCardProps {
  id: string;
  image: string;
  name: string;
  pricePerDay: number;
  location: string;
  rating: number;
  reviews: number;
  available: boolean;
  verified?: boolean;
  onClick: () => void;
}

export function ToolCard({
  image,
  name,
  pricePerDay,
  location,
  rating,
  reviews,
  available,
  verified,
  onClick,
}: ToolCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white px-3 py-1 bg-gray-900/80 rounded-full text-sm">
              Currently Unavailable
            </span>
          </div>
        )}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-700" />
        </button>
        {verified && (
          <Badge className="absolute top-3 left-3 bg-[#00A86B] text-white border-0">
            Verified
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-gray-900 flex-1 line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 fill-[#F8B400] text-[#F8B400]" />
            <span className="text-sm text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-900">${pricePerDay}</span>
            <span className="text-sm text-gray-500"> /day</span>
          </div>
          {available && (
            <span className="text-sm text-[#00A86B]">Available</span>
          )}
        </div>
      </div>
    </div>
  );
}
