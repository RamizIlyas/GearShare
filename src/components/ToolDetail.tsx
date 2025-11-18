import { useState } from "react";
import {
  ChevronLeft,
  Heart,
  Share2,
  MapPin,
  Star,
  Shield,
  MessageCircle,
  Calendar,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { ToolCard } from "./ToolCard";

interface ToolDetailProps {
  onNavigate: (page: string, params?: any) => void;
  toolId?: string;
}

export function ToolDetail({ onNavigate, toolId }: ToolDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const tool = {
    id: "1",
    name: "Professional Cordless Drill Kit",
    images: [
      "https://images.unsplash.com/photo-1662350688784-104a3a954692?w=1200",
      "https://images.unsplash.com/photo-1685320198649-781e83a61de4?w=1200",
      "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=1200",
    ],
    pricePerDay: 15,
    location: "Brooklyn, NY",
    distance: "2.3 miles away",
    rating: 4.9,
    reviews: 42,
    description:
      "Professional-grade cordless drill kit with multiple attachments. Perfect for home renovation, furniture assembly, and general DIY projects. Includes 2 batteries, charger, and carrying case. Easy to use for beginners and powerful enough for professionals.",
    features: [
      "20V lithium-ion battery",
      "Variable speed control",
      "LED work light",
      "Multiple drill bits included",
      "Compact design for tight spaces",
    ],
    owner: {
      name: "Michael Johnson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      rating: 4.9,
      reviewCount: 156,
      verified: true,
      responseTime: "within an hour",
      memberSince: "2023",
    },
  };

  const reviews = [
    {
      id: "1",
      user: "Sarah Thompson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      rating: 5,
      date: "2 weeks ago",
      text: "Great tool! Michael was very helpful and the drill worked perfectly for my project. Would definitely rent again.",
    },
    {
      id: "2",
      user: "David Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      date: "1 month ago",
      text: "Excellent condition and exactly what I needed. The owner was flexible with pickup times. Highly recommend!",
    },
    {
      id: "3",
      user: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 4,
      date: "2 months ago",
      text: "Good tool, worked well for my furniture assembly project. Minor wear but nothing that affected performance.",
    },
  ];

  const relatedTools = [
    {
      id: "2",
      name: "Impact Driver Set",
      image: "https://images.unsplash.com/photo-1685320198649-781e83a61de4?w=800",
      pricePerDay: 18,
      location: "Brooklyn, NY",
      rating: 4.8,
      reviews: 35,
      available: true,
    },
    {
      id: "3",
      name: "Circular Saw",
      image: "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=800",
      pricePerDay: 20,
      location: "Queens, NY",
      rating: 4.7,
      reviews: 28,
      available: true,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("browse")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#00A86B] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Browse</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative aspect-[16/10] bg-gray-100">
                <ImageWithFallback
                  src={tool.images[currentImage]}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
                {currentImage > 0 && (
                  <button
                    onClick={() => setCurrentImage(currentImage - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {currentImage < tool.images.length - 1 && (
                  <button
                    onClick={() => setCurrentImage(currentImage + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 flex gap-2 overflow-x-auto">
                {tool.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImage === index
                        ? "border-[#00A86B]"
                        : "border-transparent"
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${tool.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tool Details */}
            <Card className="p-6 border-0 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-gray-900 mb-2">{tool.name}</h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tool.location}</span>
                    </div>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm">{tool.distance}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-5 h-5 fill-[#F8B400] text-[#F8B400]" />
                    <span className="text-gray-900">{tool.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({tool.reviews} reviews)
                    </span>
                  </div>
                  <Badge className="bg-[#00A86B] text-white border-0">
                    Available
                  </Badge>
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h3 className="text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {tool.description}
                </p>

                <h3 className="text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00A86B] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Owner Info */}
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-gray-900 mb-4">Tool Owner</h3>
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={tool.owner.image} alt={tool.owner.name} />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-gray-900">{tool.owner.name}</h4>
                    {tool.owner.verified && (
                      <Badge className="bg-[#00A86B] text-white border-0 text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-[#F8B400] text-[#F8B400]" />
                    <span className="text-sm text-gray-900">{tool.owner.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({tool.owner.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Responds {tool.owner.responseTime}</p>
                    <p>Member since {tool.owner.memberSince}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-6 border-0 shadow-sm">
              <h3 className="text-gray-900 mb-4">Reviews ({reviews.length})</h3>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id}>
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.image} alt={review.user} />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-gray-900">{review.user}</h4>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#F8B400] text-[#F8B400]"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.text}</p>
                      </div>
                    </div>
                    {review.id !== reviews[reviews.length - 1].id && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-0 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-gray-900">${tool.pricePerDay}</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <p className="text-sm text-gray-500">
                  Minimum rental: 1 day
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-gray-900 mb-3">Select Dates</h4>
                <CalendarComponent
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={(dates) => setSelectedDates(dates || [])}
                  className="rounded-lg border"
                />
              </div>

              {selectedDates.length > 0 && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">
                      ${tool.pricePerDay} × {selectedDates.length} days
                    </span>
                    <span className="text-gray-900">
                      ${tool.pricePerDay * selectedDates.length}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Service fee</span>
                    <span className="text-gray-900">$5</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">
                      ${tool.pricePerDay * selectedDates.length + 5}
                    </span>
                  </div>
                </div>
              )}

              <Button
                onClick={() => onNavigate("booking", { toolId: tool.id })}
                className="w-full h-12 bg-[#00A86B] hover:bg-[#008F5D] text-white mb-3"
                disabled={selectedDates.length === 0}
              >
                Request to Rent
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Message Owner
              </Button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-[#00A86B]" />
                  <span>Secure payment protection</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-[#00A86B]" />
                  <span>Free cancellation up to 24h</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Calendar className="w-5 h-5 text-[#00A86B]" />
                  <span>Flexible pickup times</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Related Tools */}
        <div className="mt-16">
          <h2 className="text-gray-900 mb-6">Similar Tools You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedTools.map((relatedTool) => (
              <ToolCard
                key={relatedTool.id}
                {...relatedTool}
                onClick={() =>
                  onNavigate("tool-detail", { toolId: relatedTool.id })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
