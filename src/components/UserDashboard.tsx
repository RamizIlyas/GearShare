import { useState } from "react";
import {
  Package,
  DollarSign,
  MessageCircle,
  User,
  Calendar,
  TrendingUp,
  Shield,
  Star,
  Clock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Separator } from "./ui/separator";

interface UserDashboardProps {
  onNavigate: (page: string, params?: any) => void;
}

export function UserDashboard({ onNavigate }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState("rentals");

  const stats = {
    activeRentals: 2,
    totalEarnings: 1250,
    activeListings: 4,
    rating: 4.9,
  };

  const rentals = [
    {
      id: "1",
      tool: "Professional Cordless Drill Kit",
      image: "https://images.unsplash.com/photo-1662350688784-104a3a954692?w=400",
      owner: "Michael Johnson",
      status: "active",
      startDate: "Oct 18, 2025",
      endDate: "Oct 20, 2025",
      total: 45,
    },
    {
      id: "2",
      tool: "Electric Lawn Mower",
      image: "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?w=400",
      owner: "Sarah Williams",
      status: "active",
      startDate: "Oct 17, 2025",
      endDate: "Oct 19, 2025",
      total: 75,
    },
    {
      id: "3",
      tool: "Pressure Washer",
      image: "https://images.unsplash.com/photo-1517089152318-42ec560349c0?w=400",
      owner: "David Chen",
      status: "completed",
      startDate: "Oct 10, 2025",
      endDate: "Oct 12, 2025",
      total: 90,
    },
  ];

  const listings = [
    {
      id: "1",
      name: "Circular Saw Professional",
      image: "https://images.unsplash.com/photo-1685320198649-781e83a61de4?w=400",
      pricePerDay: 18,
      status: "active",
      views: 145,
      bookings: 8,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Extension Ladder 24ft",
      image: "https://images.unsplash.com/photo-1656082304836-e55f17dabf3a?w=400",
      pricePerDay: 20,
      status: "active",
      views: 98,
      bookings: 5,
      rating: 4.9,
    },
    {
      id: "3",
      name: "Garden Tool Set Complete",
      image: "https://images.unsplash.com/photo-1523301551780-cd17359a95d0?w=400",
      pricePerDay: 12,
      status: "rented",
      views: 67,
      bookings: 12,
      rating: 4.7,
    },
    {
      id: "4",
      name: "Paint Sprayer Kit",
      image: "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=400",
      pricePerDay: 25,
      status: "active",
      views: 203,
      bookings: 15,
      rating: 4.9,
    },
  ];

  const messages = [
    {
      id: "1",
      user: "Emma Thompson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      message: "Hi! Is the drill available this weekend?",
      time: "5 min ago",
      unread: true,
    },
    {
      id: "2",
      user: "James Wilson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      message: "Thank you for the quick response!",
      time: "2 hours ago",
      unread: false,
    },
    {
      id: "3",
      user: "Lisa Anderson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      message: "Can I extend the rental for one more day?",
      time: "1 day ago",
      unread: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your rentals and listings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#00A86B]/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-[#00A86B]" />
              </div>
              <Badge className="bg-[#F8B400] text-white border-0">
                Active
              </Badge>
            </div>
            <div className="text-gray-900 mb-1">{stats.activeRentals}</div>
            <p className="text-sm text-gray-600">Active Rentals</p>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#00A86B]/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#00A86B]" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#00A86B]" />
            </div>
            <div className="text-gray-900 mb-1">${stats.totalEarnings}</div>
            <p className="text-sm text-gray-600">Total Earnings</p>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#00A86B]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#00A86B]" />
              </div>
            </div>
            <div className="text-gray-900 mb-1">{stats.activeListings}</div>
            <p className="text-sm text-gray-600">Active Listings</p>
          </Card>

          <Card className="p-6 border-0 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#F8B400]/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-[#F8B400]" />
              </div>
            </div>
            <div className="text-gray-900 mb-1">{stats.rating}</div>
            <p className="text-sm text-gray-600">Your Rating</p>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-gray-200 p-1">
            <TabsTrigger value="rentals" className="data-[state=active]:bg-[#00A86B] data-[state=active]:text-white">
              <Package className="w-4 h-4 mr-2" />
              My Rentals
            </TabsTrigger>
            <TabsTrigger value="listings" className="data-[state=active]:bg-[#00A86B] data-[state=active]:text-white">
              <Shield className="w-4 h-4 mr-2" />
              My Listings
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-[#00A86B] data-[state=active]:text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Messages
              {messages.filter((m) => m.unread).length > 0 && (
                <Badge className="ml-2 bg-[#F8B400] text-white border-0 h-5 px-2">
                  {messages.filter((m) => m.unread).length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-[#00A86B] data-[state=active]:text-white">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* My Rentals Tab */}
          <TabsContent value="rentals" className="space-y-4">
            {rentals.map((rental) => (
              <Card key={rental.id} className="p-6 border-0 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <ImageWithFallback
                      src={rental.image}
                      alt={rental.tool}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900 mb-1">{rental.tool}</h3>
                        <p className="text-sm text-gray-600">
                          Owner: {rental.owner}
                        </p>
                      </div>
                      <Badge
                        className={
                          rental.status === "active"
                            ? "bg-[#00A86B] text-white border-0"
                            : "bg-gray-500 text-white border-0"
                        }
                      >
                        {rental.status === "active" ? "Active" : "Completed"}
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {rental.startDate} - {rental.endDate}
                        </span>
                      </div>
                      <span className="text-sm text-gray-900">
                        Total: ${rental.total}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {rental.status === "active" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message Owner
                          </Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </>
                      )}
                      {rental.status === "completed" && (
                        <Button
                          size="sm"
                          onClick={() => onNavigate("review", { toolId: rental.id })}
                          className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
                        >
                          <Star className="w-4 h-4 mr-2" />
                          Leave Review
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* My Listings Tab */}
          <TabsContent value="listings" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">{listings.length} total listings</p>
              <Button
                onClick={() => onNavigate("list-tool")}
                className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
              >
                List New Tool
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {listings.map((listing) => (
                <Card key={listing.id} className="p-6 border-0 shadow-sm">
                  <div className="flex gap-4 mb-4">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={listing.image}
                        alt={listing.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-gray-900">{listing.name}</h4>
                        <Badge
                          className={
                            listing.status === "active"
                              ? "bg-[#00A86B] text-white border-0"
                              : "bg-[#F8B400] text-white border-0"
                          }
                        >
                          {listing.status === "active" ? "Active" : "Rented"}
                        </Badge>
                      </div>
                      <p className="text-gray-900 mb-2">
                        ${listing.pricePerDay}/day
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#F8B400] text-[#F8B400]" />
                        <span className="text-sm text-gray-600">
                          {listing.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Separator className="mb-4" />
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-600">Views</p>
                      <p className="text-gray-900">{listing.views}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Bookings</p>
                      <p className="text-gray-900">{listing.bookings}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      View
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-4">
            <Card className="border-0 shadow-sm divide-y">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                    message.unread ? "bg-[#00A86B]/5" : ""
                  }`}
                >
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={message.image} alt={message.user} />
                      <AvatarFallback>{message.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-gray-900">{message.user}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {message.time}
                          </span>
                          {message.unread && (
                            <div className="w-2 h-2 rounded-full bg-[#00A86B]"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {message.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="p-6 border-0 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-gray-900">John Doe</h3>
                    <Badge className="bg-[#00A86B] text-white border-0">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">Member since January 2023</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-[#F8B400] text-[#F8B400]" />
                      <span className="text-gray-900">4.9</span>
                      <span className="text-sm text-gray-500">(45 reviews)</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>
              <Separator className="my-6" />
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <p className="text-gray-900">john.doe@example.com</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  <p className="text-gray-900">(555) 123-4567</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Location</label>
                  <p className="text-gray-900">Brooklyn, NY 11201</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
