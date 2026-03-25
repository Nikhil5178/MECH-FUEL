import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  User,
  Star,
  Navigation,
  MessageCircle,
} from "lucide-react";

export function TrackOrder() {
  const { orderId } = useParams();
  const [progress, setProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(0);

  // Mock data - in a real app, this would come from an API/database
  const orderData = {
    orderId: orderId || "MF-123456",
    serviceType: "Emergency Fuel",
    status: "In Progress",
    customerName: "John Doe",
    location: "123 Main St, Downtown",
    estimatedArrival: "15-20 minutes",
    technician: {
      name: "Mike Rodriguez",
      rating: 4.9,
      phone: "(555) 987-6543",
      vehicle: "Service Van #42",
    },
  };

  const statuses = [
    { label: "Request Received", icon: CheckCircle, completed: true },
    { label: "Technician Assigned", icon: User, completed: true },
    { label: "En Route", icon: Navigation, completed: true },
    { label: "Arriving Soon", icon: MapPin, completed: false },
    { label: "Service Complete", icon: CheckCircle, completed: false },
  ];

  useEffect(() => {
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 1000);

    // Simulate status changes
    const statusInterval = setInterval(() => {
      setCurrentStatus((prev) => {
        if (prev >= statuses.length - 1) return prev;
        return prev + 1;
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <Link to="/dashboard">
            <Button variant="outline" size="sm">
              ← Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Tracking Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Order #{orderData.orderId}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{orderData.serviceType}</p>
                  </div>
                  <Badge className="bg-blue-500">
                    {orderData.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">Progress</p>
                    <p className="text-sm text-gray-600">{Math.min(progress, 100)}%</p>
                  </div>
                  <Progress value={Math.min(progress, 100)} className="h-2" />
                </div>

                {/* Status Timeline */}
                <div className="space-y-4">
                  {statuses.map((status, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`p-2 rounded-full ${
                          index <= currentStatus
                            ? "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      >
                        <status.icon
                          className={`size-5 ${
                            index <= currentStatus ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1 pt-1">
                        <p
                          className={`font-medium ${
                            index <= currentStatus
                              ? "text-gray-900"
                              : "text-gray-400"
                          }`}
                        >
                          {status.label}
                        </p>
                        {index === currentStatus && (
                          <p className="text-sm text-gray-600 mt-1">In progress...</p>
                        )}
                        {index < currentStatus && (
                          <p className="text-sm text-green-600 mt-1">✓ Completed</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Live Location Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
                  {/* Mock Map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="size-12 text-orange-500 mx-auto mb-3 animate-bounce" />
                    <p className="text-gray-700 font-medium">Technician Location</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Real-time GPS tracking active
                    </p>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-600">Current Distance: 2.3 miles</p>
                      <p className="text-sm font-medium text-orange-600">
                        ETA: {orderData.estimatedArrival}
                      </p>
                    </div>
                  </div>
                  {/* Animated Pulse */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 bg-orange-500 rounded-full opacity-20 animate-ping"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technician Info */}
            <Card>
              <CardHeader>
                <CardTitle>Your Technician</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                    {orderData.technician.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {orderData.technician.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-700">{orderData.technician.rating}</span>
                    <span className="text-sm text-gray-500">(234 reviews)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{orderData.technician.vehicle}</p>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Phone className="size-4 mr-2" />
                    Call {orderData.technician.name.split(' ')[0]}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="size-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Details */}
            <Card>
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Customer Name</p>
                  <p className="font-medium text-gray-900">{orderData.customerName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Service Location</p>
                  <p className="font-medium text-gray-900">{orderData.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Service Type</p>
                  <p className="font-medium text-gray-900">{orderData.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estimated Arrival</p>
                  <p className="font-medium text-orange-600 flex items-center gap-2">
                    <Clock className="size-4" />
                    {orderData.estimatedArrival}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Our support team is available 24/7 to assist you.
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="size-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
