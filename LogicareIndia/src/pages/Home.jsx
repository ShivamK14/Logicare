import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import { services } from "../data/services";
import { stats } from "../data/stats";
import { testimonials } from "../data/testimonials";
import BackgroundImage from "../components/Baclgroundimage";
/**
 * Home Page
 * Main landing page with hero, services, stats, coverage, and testimonials
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Delhivery Style */}
      <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 flex items-center overflow-hidden">
        <BackgroundImage />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              India's Most Trusted
              <span className="block mt-3 text-white/95">
                Logistics Platform
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with seamless freight, fulfillment, and
              tracking solutions across India. Scale faster with
              technology-driven logistics.
            </p>

            {/* Trust Stats - Delhivery Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  50K+
                </div>
                <div className="text-sm text-white/90">Deliveries</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  500+
                </div>
                <div className="text-sm text-white/90">Partners</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  28
                </div>
                <div className="text-sm text-white/90">States</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  99.5%
                </div>
                <div className="text-sm text-white/90">On-Time</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary-500 hover:bg-gray-50 shadow-xl font-semibold"
                >
                  Get a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Delhivery Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              Complete Logistics Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to streamline your supply chain and grow your
              business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              return (
                <Card
                  key={service.id}
                  className="text-center bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-primary-500 hover:text-primary-600 font-semibold inline-flex items-center group"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why LogiCare Section with Stats - Delhivery Style */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LogiCare?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of businesses across India
            </p>
          </div>

          {/* Stats Grid - Delhivery Style */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              return (
                <Card
                  key={stat.id}
                  className={`text-center bg-gradient-to-br from-primary-500 to-primary-600 text-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-5xl sm:text-6xl font-bold mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-white/95 font-semibold text-lg">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Features - Delhivery Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center bg-white hover:border-primary-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Fast & Reliable
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Optimized routes and dedicated fleet ensure your shipments reach
                on time, every time.
              </p>
            </Card>

            <Card className="text-center bg-white hover:border-primary-400">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Secure & Insured
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                All shipments are fully insured with real-time tracking and
                secure handling protocols.
              </p>
            </Card>

            <Card className="text-center bg-white hover:border-primary-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Tech-Enabled
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Advanced APIs and integrations to seamlessly connect with your
                existing systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* India Coverage Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Pan-India Network
              </h2>
              <p className="text-xl text-gray-600">
                Serving businesses across all 28 states and 8 union territories
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary-50 via-white to-primary-100/50 border-2 border-primary-200 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    500+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Service Centers
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    10,000+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Delivery Partners
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    28
                  </div>
                  <div className="text-gray-700 font-medium">
                    States Covered
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-200">
                <p className="text-center text-gray-700">
                  <strong>Major Cities:</strong> Mumbai, Delhi, Bangalore,
                  Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, and 100+
                  more cities
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white/80 to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses of all sizes across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => {
              return (
                <Card
                  key={testimonial.id}
                  className="border-2 border-neutral-200 bg-white hover:border-primary-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Delhivery Style */}
      <section className="relative py-24 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600">
        <BackgroundImage />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using LogiCare to streamline
            their supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-500 hover:bg-gray-50 font-semibold"
              >
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
