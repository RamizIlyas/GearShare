import { useState } from "react";
import { Search, MapPin, SlidersHorizontal, Map, Grid3x3 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ToolCard } from "./ToolCard";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

interface BrowseToolsProps {
  onNavigate: (page: string, params?: any) => void;
  initialCategory?: string;
}

export function BrowseTools({ onNavigate, initialCategory }: BrowseToolsProps) {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [distance, setDistance] = useState([10]);
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const tools = [
    {
      id: "1",
      name: "Professional Cordless Drill Kit",
      image: "https://images.unsplash.com/photo-1662350688784-104a3a954692?w=800",
      pricePerDay: 15,
      location: "Brooklyn, NY",
      rating: 4.9,
      reviews: 42,
      available: true,
      verified: true,
    },
    {
      id: "2",
      name: "Electric Lawn Mower",
      image: "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?w=800",
      pricePerDay: 25,
      location: "Queens, NY",
      rating: 4.8,
      reviews: 28,
      available: true,
      verified: true,
    },
    {
      id: "3",
      name: "Extension Ladder 24ft",
      image: "https://images.unsplash.com/photo-1656082304836-e55f17dabf3a?w=800",
      pricePerDay: 20,
      location: "Manhattan, NY",
      rating: 4.7,
      reviews: 35,
      available: false,
    },
    {
      id: "4",
      name: "Circular Saw Professional",
      image: "https://images.unsplash.com/photo-1685320198649-781e83a61de4?w=800",
      pricePerDay: 18,
      location: "Bronx, NY",
      rating: 4.9,
      reviews: 51,
      available: true,
      verified: true,
    },
    {
      id: "5",
      name: "Pressure Washer 3000PSI",
      image: "https://images.unsplash.com/photo-1517089152318-42ec560349c0?w=800",
      pricePerDay: 30,
      location: "Staten Island, NY",
      rating: 4.8,
      reviews: 23,
      available: true,
    },
    {
      id: "6",
      name: "Garden Tool Set Complete",
      image: "https://images.unsplash.com/photo-1523301551780-cd17359a95d0?w=800",
      pricePerDay: 12,
      location: "Brooklyn, NY",
      rating: 4.6,
      reviews: 19,
      available: true,
    },
  ];

  const categories = [
    "Power Tools",
    "Gardening",
    "DIY Tools",
    "Construction",
    "Painting",
    "Plumbing",
    "Electrical",
    "Automotive",
  ];

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-gray-900 mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label
                htmlFor={category}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={200}
          step={5}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}/day</span>
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-4">Distance</h3>
        <Slider
          value={distance}
          onValueChange={setDistance}
          max={50}
          step={5}
          className="mb-3"
        />
        <div className="text-sm text-gray-600">
          Within {distance[0]} miles
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-4">Availability</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="available-now" defaultChecked />
            <Label htmlFor="available-now" className="text-sm text-gray-700 cursor-pointer">
              Available Now
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="verified-only" />
            <Label htmlFor="verified-only" className="text-sm text-gray-700 cursor-pointer">
              Verified Owners Only
            </Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-4">Rating</h3>
        <div className="space-y-3">
          {[5, 4, 3].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="text-sm text-gray-700 cursor-pointer">
                {rating}+ Stars
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search for tools..."
                className="pl-12 h-11"
              />
            </div>
            <div className="sm:w-64 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Location"
                className="pl-12 h-11"
              />
            </div>
            <Button className="h-11 bg-[#00A86B] hover:bg-[#008F5D] text-white">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900">Filters</h3>
                <button className="text-sm text-[#00A86B] hover:text-[#008F5D]">
                  Clear All
                </button>
              </div>
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-gray-900 mb-1">
                  {initialCategory || "All Tools"}
                </h2>
                <p className="text-sm text-gray-600">{tools.length} tools available</p>
              </div>

              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Toggle */}
                <div className="hidden sm:flex bg-white rounded-lg border border-gray-200 p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-[#00A86B] text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("map")}
                    className={`p-2 rounded ${
                      viewMode === "map"
                        ? "bg-[#00A86B] text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Map className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    {...tool}
                    onClick={() => onNavigate("tool-detail", { toolId: tool.id })}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Map view coming soon</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
