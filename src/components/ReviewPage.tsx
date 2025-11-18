import { useState } from "react";
import { ChevronLeft, Star, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ReviewPageProps {
  onNavigate: (page: string, params?: any) => void;
  toolId?: string;
}

export function ReviewPage({ onNavigate, toolId }: ReviewPageProps) {
  const [overallRating, setOverallRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const tool = {
    name: "Professional Cordless Drill Kit",
    image: "https://images.unsplash.com/photo-1662350688784-104a3a954692?w=400",
    owner: "Michael Johnson",
  };

  const StarRating = ({
    rating,
    onChange,
    label,
  }: {
    rating: number;
    onChange: (rating: number) => void;
    label: string;
  }) => {
    return (
      <div>
        <Label className="mb-3 block">{label}</Label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onChange(star)}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={`w-10 h-10 ${
                  star <= rating
                    ? "fill-[#F8B400] text-[#F8B400]"
                    : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-[#00A86B]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-[#00A86B]" />
          </div>
          <h1 className="text-gray-900 mb-3">Thank You!</h1>
          <p className="text-gray-600 mb-8">
            Your review has been submitted and will help other community members make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => onNavigate("dashboard")}
              className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
            >
              Back to Dashboard
            </Button>
            <Button
              onClick={() => onNavigate("browse")}
              variant="outline"
            >
              Browse More Tools
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate("dashboard")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#00A86B] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>

        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Leave a Review</h1>
          <p className="text-gray-600">
            Share your experience to help others in the community
          </p>
        </div>

        {/* Tool Info */}
        <Card className="p-6 border-0 shadow-sm mb-6">
          <div className="flex gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
              <ImageWithFallback
                src={tool.image}
                alt={tool.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-600">Rented from {tool.owner}</p>
            </div>
          </div>
        </Card>

        {/* Review Form */}
        <Card className="p-6 border-0 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-8"
          >
            {/* Overall Rating */}
            <StarRating
              rating={overallRating}
              onChange={setOverallRating}
              label="Overall Experience"
            />

            {/* Tool Quality */}
            <StarRating
              rating={qualityRating}
              onChange={setQualityRating}
              label="Tool Quality & Condition"
            />

            {/* Communication */}
            <StarRating
              rating={communicationRating}
              onChange={setCommunicationRating}
              label="Owner Communication"
            />

            {/* Written Review */}
            <div>
              <Label htmlFor="review" className="mb-3 block">
                Share Your Experience (Optional)
              </Label>
              <Textarea
                id="review"
                placeholder="Tell us about your rental experience. What did you use the tool for? How was the pickup and return process?"
                rows={6}
                className="resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                Your review will be publicly visible and help build trust in the community
              </p>
            </div>

            {/* Tips for Review */}
            <div className="bg-[#00A86B]/5 border border-[#00A86B]/20 rounded-xl p-4">
              <h4 className="text-gray-900 mb-3">Tips for a Great Review</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <span>Be specific about what worked well or could be improved</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <span>Mention the condition of the tool and accessories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <span>Comment on the owner's responsiveness and helpfulness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <span>Keep it constructive and respectful</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => onNavigate("dashboard")}
                className="flex-1"
              >
                Skip for Now
              </Button>
              <Button
                type="submit"
                disabled={overallRating === 0 || qualityRating === 0 || communicationRating === 0}
                className="flex-1 bg-[#00A86B] hover:bg-[#008F5D] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Review
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
