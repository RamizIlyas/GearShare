import { Search, MapPin, CheckCircle2, Wrench, Hammer, Drill, Leaf, Users, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CategoryCard } from "./CategoryCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

interface LandingPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const categories = [
    { icon: Drill, title: "Power Tools", count: "245", gradient: "bg-gradient-to-br from-[#00A86B] to-[#1AB394]" },
    { icon: Leaf, title: "Gardening", count: "189", gradient: "bg-gradient-to-br from-[#1AB394] to-[#00A86B]" },
    { icon: Wrench, title: "DIY Tools", count: "312", gradient: "bg-gradient-to-br from-[#F8B400] to-[#F59E0B]" },
    { icon: Hammer, title: "Construction", count: "156", gradient: "bg-gradient-to-br from-[#00A86B] to-[#0D9488]" },
  ];

  const steps = [
    {
      number: "1",
      title: "Find",
      description: "Search for the tool you need in your area",
      icon: Search,
    },
    {
      number: "2",
      title: "Rent",
      description: "Book securely and arrange pickup or delivery",
      icon: CheckCircle2,
    },
    {
      number: "3",
      title: "Return",
      description: "Return the tool and leave a review",
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "DIY Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      text: "GearShare saved me hundreds of dollars. I can now access professional tools whenever I need them!",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Home Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      text: "Love the community aspect. I've made money from tools sitting in my garage and met great neighbors.",
      rating: 5,
    },
    {
      name: "Jessica L.",
      role: "Professional Contractor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      text: "Perfect for one-time projects. The verification system makes me feel safe renting to others.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00A86B] to-[#1AB394] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-white">
              Borrow Smarter. Lend Locally.
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Access thousands of tools in your community. Save money, reduce waste, and connect with your neighbors.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="What tool do you need?"
                    className="pl-12 h-12 border-0 bg-gray-50"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Location or ZIP code"
                    className="pl-12 h-12 border-0 bg-gray-50"
                  />
                </div>
                <Button
                  onClick={() => onNavigate("browse")}
                  className="h-12 px-8 bg-[#00A86B] hover:bg-[#008F5D] text-white"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">10,000+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                <span className="text-sm">Eco-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">Browse by Category</h2>
            <p className="text-gray-600">Find exactly what you need for your project</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                count={category.count}
                gradient={category.gradient}
                onClick={() => onNavigate("browse", { category: category.title })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-600">Get started in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Card className="p-8 text-center bg-white border-0 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00A86B] to-[#1AB394] text-white flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#1AB394]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">What Our Community Says</h2>
            <p className="text-gray-600">Join thousands of satisfied members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6 border-0 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-[#F8B400] text-[#F8B400]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Highlight */}
      <section className="py-16 bg-gradient-to-br from-[#00A86B] to-[#1AB394] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-white mb-4">Building a Sustainable Future</h2>
            <p className="text-xl text-white/90 mb-8">
              Every tool shared reduces waste and carbon footprint. Together, we've prevented over 50 tons of tools from ending up in landfills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-2">50+</div>
                <div className="text-white/80">Tons Saved</div>
              </div>
              <div>
                <div className="text-4xl mb-2">10,000+</div>
                <div className="text-white/80">Active Members</div>
              </div>
              <div>
                <div className="text-4xl mb-2">$2M+</div>
                <div className="text-white/80">Community Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community today and start saving money while helping the environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("browse")}
              className="h-12 px-8 bg-[#00A86B] hover:bg-[#008F5D] text-white"
            >
              Browse Tools
            </Button>
            <Button
              onClick={() => onNavigate("list-tool")}
              variant="outline"
              className="h-12 px-8 border-[#00A86B] text-[#00A86B] hover:bg-[#00A86B] hover:text-white"
            >
              List Your Tools
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
