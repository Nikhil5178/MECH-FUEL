import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Fuel,
  Shield,
  Clock,
  Users,
  Award,
  Target,
  Heart,
  TrendingUp,
  MapPin,
  Zap,
  CheckCircle,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All technicians are certified, insured, and background-checked.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "24/7 availability with average response time under 20 minutes.",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We're here to help, always.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology for seamless service delivery.",
    },
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Customers" },
    { icon: MapPin, value: "100+", label: "Cities Covered" },
    { icon: Award, value: "4.9/5", label: "Average Rating" },
    { icon: TrendingUp, value: "99.8%", label: "Success Rate" },
  ];

  const features = [
    "Licensed and insured technicians",
    "Real-time GPS tracking",
    "Transparent pricing",
    "24/7 customer support",
    "Fast response times",
    "Professional service quality",
    "Wide coverage area",
    "Multiple payment options",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <Fuel className="size-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mech-Fuel</h1>
            <p className="text-xl text-orange-50 mb-8">
              We're revolutionizing roadside assistance by combining professional service with
              cutting-edge technology to keep you moving, no matter what.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 text-orange-600 mb-4">
                <Target className="size-6" />
                <span className="font-semibold uppercase text-sm tracking-wide">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Keeping You Safe and Moving Forward
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                At Mech-Fuel, we believe that being stranded shouldn't be stressful. Our mission is
                to provide rapid, reliable, and professional roadside assistance whenever and
                wherever you need it.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                Founded in 2020, we've grown from a small startup to a nationwide service, helping
                thousands of drivers every day. Our commitment to innovation and customer service
                drives everything we do.
              </p>
              <Link to="/request">
                <Button className="bg-orange-500 hover:bg-orange-600" size="lg">
                  Get Started Today
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765833541491-c7a5b1f91b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWVsJTIwZGVsaXZlcnklMjB0cnVjayUyMGdhcyUyMHN0YXRpb258ZW58MXx8fHwxNzc0MjgzNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mech-Fuel service vehicle"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="size-8 text-orange-600" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide every service we provide and every interaction we have.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Mech-Fuel?
              </h2>
              <p className="text-lg text-gray-600">
                We're not just another roadside assistance service. Here's what sets us apart:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4">
                  <CheckCircle className="size-6 text-green-500 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758876201966-a680772a41ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc2VydmljZSUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzc0MjgzNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Technology and customer service"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 text-orange-600 mb-4">
                <Zap className="size-6" />
                <span className="font-semibold uppercase text-sm tracking-wide">Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Powered by Innovation
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our platform leverages real-time GPS tracking, AI-powered dispatch algorithms, and
                mobile technology to ensure you get help faster than ever before.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Smart Dispatching:</strong> Our AI matches you with the nearest
                    available technician in seconds.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Live Tracking:</strong> Watch your technician's arrival in real-time on
                    an interactive map.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Seamless Communication:</strong> Chat or call your technician directly
                    through the app.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Mech-Fuel Difference
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their roadside assistance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Request Service Now
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View Your Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
