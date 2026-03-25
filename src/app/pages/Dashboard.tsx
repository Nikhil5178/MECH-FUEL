import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  User,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Eye,
  Plus,
  ChevronRight,
  Fuel,
  Car,
  Battery,
  Wrench,
} from "lucide-react";

export function Dashboard() {
  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    memberSince: "January 2024",
  };

  // Mock order history
  const orders = [
    {
      id: "MF-789012",
      date: "2026-03-20",
      service: "Emergency Fuel",
      icon: Fuel,
      status: "Completed",
      statusColor: "green",
      location: "123 Main St, Downtown",
      technician: "Mike Rodriguez",
      cost: "$35.00",
      rating: 5,
    },
    {
      id: "MF-678901",
      date: "2026-03-15",
      service: "Flat Tire Change",
      icon: Car,
      status: "Completed",
      statusColor: "green",
      location: "456 Oak Ave, Midtown",
      technician: "Sarah Johnson",
      cost: "$42.00",
      rating: 5,
    },
    {
      id: "MF-567890",
      date: "2026-03-10",
      service: "Battery Jump Start",
      icon: Battery,
      status: "Completed",
      statusColor: "green",
      location: "789 Pine Rd, Uptown",
      technician: "Alex Chen",
      cost: "$28.00",
      rating: 4,
    },
  ];

  const activeOrders = [
    {
      id: "MF-890123",
      date: "2026-03-23",
      service: "Minor Repair",
      icon: Wrench,
      status: "In Progress",
      statusColor: "blue",
      location: "321 Elm St, Downtown",
      technician: "Carlos Martinez",
      eta: "10 minutes",
    },
  ];

  const stats = [
    {
      label: "Total Services",
      value: "12",
      icon: MapPin,
      color: "orange",
    },
    {
      label: "This Month",
      value: "3",
      icon: Clock,
      color: "blue",
    },
    {
      label: "Total Spent",
      value: "$428",
      icon: DollarSign,
      color: "green",
    },
    {
      label: "Avg. Rating Given",
      value: "4.8",
      icon: Star,
      color: "yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {userData.name}!</p>
            </div>
            <Link to="/request">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="size-4 mr-2" />
                New Request
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div
                    className={`p-3 rounded-lg ${
                      stat.color === "orange"
                        ? "bg-orange-100"
                        : stat.color === "blue"
                        ? "bg-blue-100"
                        : stat.color === "green"
                        ? "bg-green-100"
                        : "bg-yellow-100"
                    }`}
                  >
                    <stat.icon
                      className={`size-6 ${
                        stat.color === "orange"
                          ? "text-orange-600"
                          : stat.color === "blue"
                          ? "text-blue-600"
                          : stat.color === "green"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Orders */}
            {activeOrders.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Active Service Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeOrders.map((order) => (
                      <div
                        key={order.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <order.icon className="size-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{order.service}</h4>
                              <p className="text-sm text-gray-600">Order #{order.id}</p>
                            </div>
                          </div>
                          <Badge className="bg-blue-500">{order.status}</Badge>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="size-4" />
                            <span>{order.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <User className="size-4" />
                            <span>Technician: {order.technician}</span>
                          </div>
                          <div className="flex items-center gap-2 text-orange-600 font-medium">
                            <Clock className="size-4" />
                            <span>ETA: {order.eta}</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Link to={`/track/${order.id}`}>
                            <Button className="w-full bg-orange-500 hover:bg-orange-600">
                              <Eye className="size-4 mr-2" />
                              Track Order
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Order History */}
            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="all">All Services</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-3">
                            <div className="bg-gray-100 p-2 rounded-lg">
                              <order.icon className="size-5 text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{order.service}</h4>
                              <p className="text-sm text-gray-600">
                                {new Date(order.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={`bg-${order.statusColor}-500`}>
                              {order.status}
                            </Badge>
                            <p className="text-sm font-semibold text-gray-900 mt-2">
                              {order.cost}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="size-4" />
                            <span>{order.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="size-4" />
                            <span>Technician: {order.technician}</span>
                          </div>
                        </div>
                        {order.rating && (
                          <div className="mt-3 pt-3 border-t flex items-center gap-1">
                            <span className="text-sm text-gray-600 mr-1">Your rating:</span>
                            {[...Array(order.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="size-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="completed" className="space-y-4">
                    {orders
                      .filter((order) => order.status === "Completed")
                      .map((order) => (
                        <div
                          key={order.id}
                          className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-start gap-3">
                              <div className="bg-gray-100 p-2 rounded-lg">
                                <order.icon className="size-5 text-gray-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900">{order.service}</h4>
                                <p className="text-sm text-gray-600">
                                  {new Date(order.date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            <p className="text-sm font-semibold text-gray-900">{order.cost}</p>
                          </div>
                        </div>
                      ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center pb-4 border-b">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{userData.name}</h3>
                  <p className="text-sm text-gray-600">Member since {userData.memberSince}</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="font-medium text-gray-900">{userData.phone}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/request">
                  <Button variant="outline" className="w-full justify-between">
                    Request New Service
                    <ChevronRight className="size-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-between">
                  Payment Methods
                  <ChevronRight className="size-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  Support Center
                  <ChevronRight className="size-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Membership */}
            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="size-5 fill-white" />
                  <h3 className="font-semibold text-lg">Premium Membership</h3>
                </div>
                <p className="text-sm text-orange-50 mb-4">
                  Get priority service, discounts, and exclusive benefits!
                </p>
                <Button className="w-full bg-white text-orange-600 hover:bg-orange-50">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
