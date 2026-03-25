import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Fuel,
  Wrench,
  MapPin,
  Clock,
  Zap,
  Shield,
  Star,
  CheckCircle,
  PhoneCall,
  Battery,
  Car,
} from "lucide-react";

export function Home() {
  const features = [
    {
      icon: Fuel,
      title: "Fuel Delivery",
      description: "Emergency fuel delivered to your exact location within minutes.",
    },
    {
      icon: Wrench,
      title: "Roadside Repairs",
      description: "Professional mechanics ready to fix minor issues on the spot.",
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Track your assistance in real-time as they approach your location.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support whenever and wherever you need help.",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Average response time under 20 minutes in urban areas.",
    },
    {
      icon: Shield,
      title: "Insured & Licensed",
      description: "All our technicians are fully certified and insured.",
    },
  ];

  const services = [
    {
      icon: Fuel,
      title: "Emergency Fuel",
      description: "Out of gas? We'll bring fuel to you.",
      price: "From $29",
    },
    {
      icon: Car,
      title: "Flat Tire Change",
      description: "Quick tire replacement service.",
      price: "From $39",
    },
    {
      icon: Battery,
      title: "Battery Jump Start",
      description: "Dead battery? We'll get you started.",
      price: "From $25",
    },
    {
      icon: Wrench,
      title: "Minor Repairs",
      description: "On-the-spot fixes for common issues.",
      price: "From $49",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Commuter",
      content: "Saved me when I ran out of gas on the highway. They arrived in 15 minutes!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Delivery Driver",
      content: "The real-time tracking feature is amazing. Professional and fast service.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Business Owner",
      content: "Used them twice for flat tires. Both times exceeded my expectations!",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Emergency Roadside Help at Your Fingertips
              </h1>
              <p className="text-lg md:text-xl text-orange-50 mb-8">
                Fuel delivery, mechanical support, and emergency assistance available 24/7.
                Help is just a tap away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request">
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 w-full sm:w-auto"
                  >
                    <PhoneCall className="size-5 mr-2" />
                    Request Help Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-orange-600 w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5" />
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="size-5" />
                  <span>Fast Response</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763377278900-0ce8242c5005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2Fkc2lkZSUyMGFzc2lzdGFuY2UlMjBtZWNoYW5pYyUyMGNhcnxlbnwxfHx8fDE3NzQyODM2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Roadside assistance professional"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mech-Fuel?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with professional service to deliver the best roadside assistance experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="size-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional assistance for all your roadside emergencies
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-gray-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <service.icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <p className="text-orange-600 font-bold text-lg">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/request">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Request Service Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get help in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Service</h3>
              <p className="text-gray-600">
                Select your issue and share your location through our app or website.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track in Real-Time</h3>
              <p className="text-gray-600">
                Watch as a nearby professional is dispatched and track their arrival.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Back on the Road</h3>
              <p className="text-gray-600">
                Our expert handles your issue quickly so you can continue your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by thousands of drivers nationwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Download our app or use our web platform to request immediate assistance. Help is always nearby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 w-full sm:w-auto">
                <PhoneCall className="size-5 mr-2" />
                Request Help Now
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                size="lg"
                className="bg-white/20 text-white border-2 border-white hover:bg-white hover:text-orange-600 w-full sm:w-auto"
              >
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}