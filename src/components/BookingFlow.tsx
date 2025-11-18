import { useState } from "react";
import { ChevronLeft, CreditCard, Lock, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BookingFlowProps {
  onNavigate: (page: string, params?: any) => void;
  toolId?: string;
}

export function BookingFlow({ onNavigate, toolId }: BookingFlowProps) {
  const [step, setStep] = useState<"summary" | "payment" | "confirmation">("summary");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const booking = {
    tool: {
      name: "Professional Cordless Drill Kit",
      image: "https://images.unsplash.com/photo-1662350688784-104a3a954692?w=400",
      owner: "Michael Johnson",
      location: "Brooklyn, NY",
    },
    dates: {
      start: "Oct 20, 2025",
      end: "Oct 22, 2025",
      days: 3,
    },
    pricing: {
      dailyRate: 15,
      total: 45,
      serviceFee: 5,
      deposit: 0,
      grandTotal: 50,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => {
            if (step === "summary") {
              onNavigate("tool-detail", { toolId });
            } else if (step === "payment") {
              setStep("summary");
            } else {
              onNavigate("dashboard");
            }
          }}
          className="flex items-center gap-2 text-gray-600 hover:text-[#00A86B] mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>
            {step === "summary"
              ? "Back to Tool"
              : step === "payment"
              ? "Back to Summary"
              : "Go to Dashboard"}
          </span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Summary Step */}
            {step === "summary" && (
              <>
                <div>
                  <h1 className="text-gray-900 mb-2">Confirm Your Booking</h1>
                  <p className="text-gray-600">Review the details before proceeding</p>
                </div>

                <Card className="p-6 border-0 shadow-sm">
                  <h3 className="text-gray-900 mb-4">Rental Details</h3>
                  <div className="flex gap-4 mb-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={booking.tool.image}
                        alt={booking.tool.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">{booking.tool.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Owner: {booking.tool.owner}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{booking.tool.location}</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#00A86B]" />
                      <div>
                        <p className="text-sm text-gray-600">Rental Period</p>
                        <p className="text-gray-900">
                          {booking.dates.start} - {booking.dates.end}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-sm">
                  <h3 className="text-gray-900 mb-4">Pickup & Return</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="pickup-time">Preferred Pickup Time</Label>
                      <Input
                        id="pickup-time"
                        type="time"
                        defaultValue="09:00"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="return-time">Preferred Return Time</Label>
                      <Input
                        id="return-time"
                        type="time"
                        defaultValue="17:00"
                        className="mt-2"
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      The owner will confirm the exact pickup and return times
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-0 shadow-sm">
                  <h3 className="text-gray-900 mb-4">Special Requests</h3>
                  <textarea
                    placeholder="Any special requests or questions for the owner? (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:border-transparent resize-none"
                  />
                </Card>

                <Button
                  onClick={() => setStep("payment")}
                  className="w-full h-12 bg-[#00A86B] hover:bg-[#008F5D] text-white"
                >
                  Continue to Payment
                </Button>
              </>
            )}

            {/* Payment Step */}
            {step === "payment" && (
              <>
                <div>
                  <h1 className="text-gray-900 mb-2">Payment</h1>
                  <p className="text-gray-600">Your payment is secure and protected</p>
                </div>

                <Card className="p-6 border-0 shadow-sm">
                  <h3 className="text-gray-900 mb-4">Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-gray-600" />
                            <span>Credit or Debit Card</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                          PayPal
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </Card>

                {paymentMethod === "card" && (
                  <Card className="p-6 border-0 shadow-sm">
                    <h3 className="text-gray-900 mb-4">Card Details</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          className="mt-2"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            className="mt-2"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="name">Cardholder Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </Card>
                )}

                <Card className="p-6 border-0 shadow-sm">
                  <h3 className="text-gray-900 mb-4">Billing Address</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="billing-address">Street Address</Label>
                      <Input
                        id="billing-address"
                        placeholder="123 Main Street"
                        className="mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="billing-city">City</Label>
                        <Input
                          id="billing-city"
                          placeholder="Brooklyn"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="billing-zip">ZIP Code</Label>
                        <Input
                          id="billing-zip"
                          placeholder="11201"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="flex items-center gap-3 p-4 bg-[#00A86B]/5 border border-[#00A86B]/20 rounded-xl">
                  <Lock className="w-5 h-5 text-[#00A86B] flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Your payment information is encrypted and secure. We never share your financial details.
                  </p>
                </div>

                <Button
                  onClick={() => setStep("confirmation")}
                  className="w-full h-12 bg-[#00A86B] hover:bg-[#008F5D] text-white"
                >
                  Complete Booking
                </Button>
              </>
            )}

            {/* Confirmation Step */}
            {step === "confirmation" && (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-[#00A86B]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-[#00A86B]" />
                </div>
                <h1 className="text-gray-900 mb-3">Booking Confirmed!</h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your rental request has been sent to {booking.tool.owner}. You'll receive a confirmation email shortly.
                </p>

                <Card className="p-6 border-0 shadow-sm mb-8 text-left max-w-md mx-auto">
                  <h3 className="text-gray-900 mb-4">What's Next?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00A86B] text-white flex items-center justify-center flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">Owner Confirmation</p>
                        <p className="text-sm text-gray-600">
                          Michael will review and confirm your booking within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00A86B] text-white flex items-center justify-center flex-shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">Coordinate Pickup</p>
                        <p className="text-sm text-gray-600">
                          You'll receive pickup details and can message the owner
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00A86B] text-white flex items-center justify-center flex-shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <p className="text-gray-900 mb-1">Enjoy Your Rental</p>
                        <p className="text-sm text-gray-600">
                          Pick up your tool and complete your project
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => onNavigate("dashboard")}
                    className="bg-[#00A86B] hover:bg-[#008F5D] text-white"
                  >
                    View My Rentals
                  </Button>
                  <Button
                    onClick={() => onNavigate("browse")}
                    variant="outline"
                  >
                    Browse More Tools
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          {step !== "confirmation" && (
            <div className="lg:col-span-1">
              <Card className="p-6 border-0 shadow-lg sticky top-24">
                <h3 className="text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      ${booking.pricing.dailyRate} × {booking.dates.days} days
                    </span>
                    <span className="text-gray-900">${booking.pricing.total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service fee</span>
                    <span className="text-gray-900">${booking.pricing.serviceFee}</span>
                  </div>
                  {booking.pricing.deposit > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Security deposit</span>
                      <span className="text-gray-900">${booking.pricing.deposit}</span>
                    </div>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between mb-6">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${booking.pricing.grandTotal}</span>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                    <span>Free cancellation up to 24h before pickup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                    <span>$1M insurance coverage included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B] flex-shrink-0 mt-0.5" />
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
