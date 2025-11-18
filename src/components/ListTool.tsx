import { useState } from "react";
import { Upload, X, ChevronLeft, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Progress } from "./ui/progress";

interface ListToolProps {
  onNavigate: (page: string, params?: any) => void;
}

export function ListTool({ onNavigate }: ListToolProps) {
  const [step, setStep] = useState(1);
  const [images, setImages] = useState<string[]>([]);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const categories = [
    "Power Tools",
    "Gardening",
    "DIY Tools",
    "Construction",
    "Painting",
    "Plumbing",
    "Electrical",
    "Automotive",
    "Carpentry",
    "Other",
  ];

  const handleImageUpload = () => {
    // Simulate image upload
    const demoImages = [
      "https://images.unsplash.com/photo-1662350688784-104a3a954692?w=400",
      "https://images.unsplash.com/photo-1685320198649-781e83a61de4?w=400",
    ];
    setImages([...images, ...demoImages].slice(0, 5));
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <button
          onClick={() => onNavigate("dashboard")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#00A86B] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>

        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">List Your Tool</h1>
          <p className="text-gray-600">
            Share your tools with the community and earn money
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step 1: Upload Photos */}
        {step === 1 && (
          <Card className="p-8 border-0 shadow-sm">
            <h2 className="text-gray-900 mb-2">Upload Photos</h2>
            <p className="text-gray-600 mb-6">
              Add at least 3 photos of your tool. Clear photos help renters make informed decisions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden bg-gray-100"
                >
                  <img
                    src={image}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  {index === 0 && (
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-[#00A86B] text-white text-xs rounded">
                      Cover
                    </div>
                  )}
                </div>
              ))}
              {images.length < 5 && (
                <button
                  onClick={handleImageUpload}
                  className="aspect-square rounded-xl border-2 border-dashed border-gray-300 hover:border-[#00A86B] transition-colors flex flex-col items-center justify-center gap-2"
                >
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-600">Upload Photo</span>
                </button>
              )}
            </div>

            <p className="text-sm text-gray-500 mb-6">
              {images.length}/5 photos uploaded (minimum 3 required)
            </p>

            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={images.length < 3}
                className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
              >
                Continue
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2: Add Details */}
        {step === 2 && (
          <Card className="p-8 border-0 shadow-sm">
            <h2 className="text-gray-900 mb-2">Tool Details</h2>
            <p className="text-gray-600 mb-6">
              Provide detailed information about your tool
            </p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="title">Tool Name *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Professional Cordless Drill Kit"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="category">Category *</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your tool, its condition, and what's included..."
                  rows={5}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Include details about condition, attachments, and usage tips
                </p>
              </div>

              <div>
                <Label htmlFor="brand">Brand</Label>
                <Input
                  id="brand"
                  placeholder="e.g., DeWalt, Makita, Bosch"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="model">Model Number</Label>
                <Input
                  id="model"
                  placeholder="e.g., DCD771C2"
                  className="mt-2"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
              >
                Continue
              </Button>
            </div>
          </Card>
        )}

        {/* Step 3: Set Price */}
        {step === 3 && (
          <Card className="p-8 border-0 shadow-sm">
            <h2 className="text-gray-900 mb-2">Set Your Price</h2>
            <p className="text-gray-600 mb-6">
              Choose a competitive daily rental rate
            </p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="price">Daily Rate *</Label>
                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    id="price"
                    type="number"
                    placeholder="25.00"
                    className="pl-8"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  You'll earn 85% after GearShare's 15% service fee
                </p>
              </div>

              <div className="bg-[#00A86B]/5 border border-[#00A86B]/20 rounded-xl p-4">
                <h4 className="text-gray-900 mb-3">Pricing Suggestions</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Similar tools in your area:</span>
                    <span className="text-gray-900">$15-25/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average for this category:</span>
                    <span className="text-gray-900">$20/day</span>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="deposit">Security Deposit (Optional)</Label>
                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    id="deposit"
                    type="number"
                    placeholder="0.00"
                    className="pl-8"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Refundable deposit to protect against damage
                </p>
              </div>

              <div>
                <Label htmlFor="min-rental">Minimum Rental Period</Label>
                <Select defaultValue="1">
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 day</SelectItem>
                    <SelectItem value="2">2 days</SelectItem>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="7">1 week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(4)}
                className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
              >
                Continue
              </Button>
            </div>
          </Card>
        )}

        {/* Step 4: Confirm Location */}
        {step === 4 && (
          <Card className="p-8 border-0 shadow-sm">
            <h2 className="text-gray-900 mb-2">Confirm Location</h2>
            <p className="text-gray-600 mb-6">
              Where can renters pick up this tool?
            </p>

            <div className="space-y-6">
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="Brooklyn"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="NY"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="zip">ZIP Code</Label>
                <Input
                  id="zip"
                  placeholder="11201"
                  className="mt-2"
                />
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <span className="text-gray-900">Privacy note:</span> Your exact address won't be shared until a rental is confirmed. Renters will only see your general neighborhood.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(3)}
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(5)}
                className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
              >
                Continue
              </Button>
            </div>
          </Card>
        )}

        {/* Step 5: Review & Publish */}
        {step === 5 && (
          <Card className="p-8 border-0 shadow-sm">
            <h2 className="text-gray-900 mb-2">Review & Publish</h2>
            <p className="text-gray-600 mb-6">
              Review your listing before publishing
            </p>

            <div className="space-y-6">
              {/* Preview */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="aspect-[16/9] bg-gray-100">
                  {images[0] && (
                    <img
                      src={images[0]}
                      alt="Tool preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 mb-2">Professional Cordless Drill Kit</h3>
                  <p className="text-gray-600 text-sm mb-3">Power Tools</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">$25/day</span>
                    <span className="text-sm text-gray-600">Brooklyn, NY</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#00A86B]/5 border border-[#00A86B]/20 rounded-xl p-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A86B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-900 mb-1">Ready to Publish</h4>
                    <p className="text-sm text-gray-600">
                      Your listing will be visible to thousands of potential renters in your area. You can edit or pause it anytime from your dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-[#00A86B] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#00A86B] hover:underline">
                      Rental Agreement
                    </a>
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="insurance" className="rounded" />
                  <label htmlFor="insurance" className="text-sm text-gray-600">
                    I understand that all rentals are covered by GearShare's protection plan
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(4)}
              >
                Back
              </Button>
              <Button
                onClick={() => onNavigate("dashboard")}
                className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
              >
                Publish Listing
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
