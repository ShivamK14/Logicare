import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

/**
 * Pricing / Get Quote Page
 * Interactive quote form with estimated pricing logic
 */
export default function Pricing() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    weight: "",
    vehicleType: "truck",
    distance: "",
  });

  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [showEstimate, setShowEstimate] = useState(false);

  // Mock pricing logic (base rates per km per kg)
  const baseRates = {
    truck: { rate: 15, minWeight: 1000 }, // ₹15 per km per 1000kg
    van: { rate: 8, minWeight: 500 }, // ₹8 per km per 500kg
    bike: { rate: 2, minWeight: 10 }, // ₹2 per km per 10kg
    container: { rate: 25, minWeight: 2000 }, // ₹25 per km per 2000kg
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEstimate = (e) => {
    e.preventDefault();

    const { distance, weight, vehicleType } = formData;
    const distanceNum = parseFloat(distance);
    const weightNum = parseFloat(weight);

    if (!distanceNum || !weightNum || distanceNum <= 0 || weightNum <= 0) {
      alert("Please enter valid distance and weight");
      return;
    }

    const vehicle = baseRates[vehicleType];
    if (!vehicle) return;

    // Calculate base price
    const basePrice =
      (distanceNum * vehicle.rate * weightNum) / vehicle.minWeight;

    // Add fuel surcharge (10%)
    const fuelSurcharge = basePrice * 0.1;

    // Add service tax (18% GST)
    const gst = (basePrice + fuelSurcharge) * 0.18;

    // Total estimate
    const total = basePrice + fuelSurcharge + gst;

    setEstimatedPrice({
      basePrice: basePrice.toFixed(2),
      fuelSurcharge: fuelSurcharge.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2),
    });

    setShowEstimate(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */} {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <section className="bg-gradient-to-br from-primary-100 via-primary-50 to-primary-100/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get an Instant Quote
            </h1>
            <p className="text-xl text-gray-600">
              Enter your shipment details to get an estimated price. Our team
              will provide a final quote after reviewing your requirements.
            </p>
          </div>
        </div>
      </section>
      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-b from-white/80 to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Shipment Details
                  </h2>
                  <form onSubmit={calculateEstimate} className="space-y-6">
                    <div>
                      <label
                        htmlFor="pickup"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        id="pickup"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Mumbai, Maharashtra"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="drop"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Drop Location
                      </label>
                      <input
                        type="text"
                        id="drop"
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Delhi, Delhi"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="distance"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Distance (km)
                        </label>
                        <input
                          type="number"
                          id="distance"
                          name="distance"
                          value={formData.distance}
                          onChange={handleChange}
                          required
                          min="1"
                          placeholder="e.g., 1500"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="weight"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          id="weight"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          required
                          min="1"
                          placeholder="e.g., 500"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="vehicleType"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Vehicle Type
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      >
                        <option value="truck">Truck (Heavy Load)</option>
                        <option value="van">Van (Medium Load)</option>
                        <option value="bike">Bike (Light Load)</option>
                        <option value="container">Container (Bulk)</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      className="w-full sm:w-auto"
                    >
                      Calculate Estimate
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Estimate Display */}
              <div className="lg:col-span-1">
                {showEstimate && estimatedPrice ? (
                  <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white border-0 shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Estimated Price
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-white/90">
                        <span>Base Price:</span>
                        <span className="font-semibold">
                          ₹{estimatedPrice.basePrice}
                        </span>
                      </div>
                      <div className="flex justify-between text-white/90">
                        <span>Fuel Surcharge:</span>
                        <span className="font-semibold">
                          ₹{estimatedPrice.fuelSurcharge}
                        </span>
                      </div>
                      <div className="flex justify-between text-white/90">
                        <span>GST (18%):</span>
                        <span className="font-semibold">
                          ₹{estimatedPrice.gst}
                        </span>
                      </div>
                      <div className="border-t border-white/30 pt-3 flex justify-between text-lg font-bold text-white">
                        <span>Total:</span>
                        <span className="text-yellow-300">
                          ₹{estimatedPrice.total}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-4">
                      * This is an estimated price. Final quote may vary based
                      on actual requirements.
                    </p>
                    <Button
                      variant="secondary"
                      className="w-full bg-white text-primary-500 hover:bg-gray-100"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Get Final Quote
                    </Button>
                  </Card>
                ) : (
                  <Card className="bg-gray-50">
                    <p className="text-gray-600 text-center">
                      Fill out the form to see your estimated price
                    </p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Info Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-100/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No Hidden Fees
                </h3>
                <p className="text-gray-600">
                  All charges are clearly displayed upfront. No surprises, no
                  hidden costs.
                </p>
              </Card>
              <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Volume Discounts
                </h3>
                <p className="text-gray-600">
                  Save more with volume-based pricing. Higher volumes = better
                  rates.
                </p>
              </Card>
              <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Flexible Plans
                </h3>
                <p className="text-gray-600">
                  Choose from pay-as-you-go or monthly subscription plans based
                  on your needs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
