import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { toast } from "sonner";
import { Fuel, Wrench, Car, Battery, MapPin, Phone, User, FileText } from "lucide-react";

export function RequestService() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    phone: "",
    location: "",
    vehicleInfo: "",
    description: "",
  });

  const services = [
    {
      id: "fuel",
      icon: Fuel,
      title: "Emergency Fuel",
      description: "Out of gas? We'll deliver fuel to your location.",
      price: "From $29",
    },
    {
      id: "tire",
      icon: Car,
      title: "Flat Tire",
      description: "Quick tire replacement or repair service.",
      price: "From $39",
    },
    {
      id: "battery",
      icon: Battery,
      title: "Battery Jump",
      description: "Dead battery? We'll jump-start your vehicle.",
      price: "From $25",
    },
    {
      id: "repair",
      icon: Wrench,
      title: "Minor Repair",
      description: "On-the-spot fixes for common vehicle issues.",
      price: "From $49",
    },
  ];

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, serviceType: serviceId });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (step === 1 && !formData.serviceType) {
      toast.error("Please select a service type");
      return;
    }
    if (step === 2) {
      if (!formData.name || !formData.phone || !formData.location) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSubmit = () => {
    // Simulate order submission
    const orderId = `MF-${Date.now().toString().slice(-6)}`;
    
    toast.success("Service request submitted successfully!", {
      description: `Order ID: ${orderId}`,
    });

    // Navigate to tracking page
    setTimeout(() => {
      navigate(`/track/${orderId}`);
    }, 1500);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      toast.loading("Getting your location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleInputChange("location", `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          toast.success("Location detected!");
        },
        () => {
          toast.error("Unable to get location. Please enter manually.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= num
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-12 md:w-24 h-1 ${
                      step > num ? "bg-orange-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {step} of 3:{" "}
              {step === 1 && "Select Service"}
              {step === 2 && "Your Information"}
              {step === 3 && "Review & Confirm"}
            </p>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>What do you need help with?</CardTitle>
              <CardDescription>Select the type of service you require</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`p-6 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                      formData.serviceType === service.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg ${
                          formData.serviceType === service.id
                            ? "bg-orange-500"
                            : "bg-gray-100"
                        }`}
                      >
                        <service.icon
                          className={`size-6 ${
                            formData.serviceType === service.id
                              ? "text-white"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{service.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                        <p className="text-orange-600 font-medium">{service.price}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleNext}
                  className="bg-orange-500 hover:bg-orange-600"
                  disabled={!formData.serviceType}
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: User Information */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Your Information</CardTitle>
              <CardDescription>Help us reach you and locate your vehicle</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  <User className="size-4 inline mr-2" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  <Phone className="size-4 inline mr-2" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">
                  <MapPin className="size-4 inline mr-2" />
                  Location *
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="location"
                    placeholder="Enter address or coordinates"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={getCurrentLocation}
                  >
                    <MapPin className="size-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Information (Optional)</Label>
                <Input
                  id="vehicle"
                  placeholder="e.g., Toyota Camry 2020, Blue"
                  value={formData.vehicleInfo}
                  onChange={(e) => handleInputChange("vehicleInfo", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  <FileText className="size-4 inline mr-2" />
                  Additional Details (Optional)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your situation or any specific concerns..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Review & Confirm */}
        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Review Your Request</CardTitle>
              <CardDescription>Please confirm your service request details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Service Type</p>
                  <p className="font-semibold text-gray-900">
                    {services.find((s) => s.id === formData.serviceType)?.title}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Name</p>
                    <p className="font-medium text-gray-900">{formData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <p className="font-medium text-gray-900">{formData.phone}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Location</p>
                  <p className="font-medium text-gray-900">{formData.location}</p>
                </div>
                {formData.vehicleInfo && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Vehicle</p>
                    <p className="font-medium text-gray-900">{formData.vehicleInfo}</p>
                  </div>
                )}
                {formData.description && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p className="font-medium text-gray-900">{formData.description}</p>
                  </div>
                )}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-2">Estimated Cost</h4>
                <p className="text-2xl font-bold text-orange-600">
                  {services.find((s) => s.id === formData.serviceType)?.price}
                </p>
                <p className="text-sm text-orange-700 mt-1">
                  Final price may vary based on service complexity
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> A professional will be dispatched to your location within 15-20
                  minutes. You'll receive real-time updates and can track their arrival.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Confirm & Request Service
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
