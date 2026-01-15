import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import { services } from '../data/services';
import { stats } from '../data/stats';
import { testimonials } from '../data/testimonials';

/**
 * Home Page
 * Main landing page with hero, services, stats, coverage, and testimonials
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 via-white to-primary-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              India's Most Trusted
              <span className="text-accent-600 block mt-2">Logistics Platform</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Empowering businesses with seamless freight, fulfillment, and tracking solutions across India.
              Scale faster with technology-driven logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="primary">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your supply chain and grow your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const colorClasses = [
                'bg-gradient-to-br from-accent-50 to-accent-100/50 border-accent-200',
                'bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200',
                'bg-gradient-to-br from-accent-50 to-accent-100/50 border-accent-200',
                'bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200',
              ];
              return (
                <Card key={service.id} className={`text-center border-2 ${colorClasses[index % 4]}`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="text-accent-600 hover:text-accent-700 font-semibold inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why LogiCare Section with Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LogiCare?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of businesses across India
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const bgColors = [
                'bg-gradient-to-br from-accent-500 to-accent-600',
                'bg-gradient-to-br from-primary-500 to-primary-600',
                'bg-gradient-to-br from-accent-500 to-accent-600',
                'bg-gradient-to-br from-primary-500 to-primary-600',
              ];
              return (
                <Card key={stat.id} className={`text-center ${bgColors[index % 4]} text-white border-0 shadow-lg`}>
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast & Reliable</h3>
              <p className="text-gray-600">
                Optimized routes and dedicated fleet ensure your shipments reach on time, every time.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Insured</h3>
              <p className="text-gray-600">
                All shipments are fully insured with real-time tracking and secure handling protocols.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tech-Enabled</h3>
              <p className="text-gray-600">
                Advanced APIs and integrations to seamlessly connect with your existing systems.
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
            
            <Card className="bg-gradient-to-br from-accent-100 via-accent-50 to-primary-50 border-2 border-accent-300 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">500+</div>
                  <div className="text-gray-700 font-medium">Service Centers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">10,000+</div>
                  <div className="text-gray-700 font-medium">Delivery Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-600 mb-2">28</div>
                  <div className="text-gray-700 font-medium">States Covered</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-accent-200">
                <p className="text-center text-gray-700">
                  <strong>Major Cities:</strong> Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, and 100+ more cities
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
              const bgColors = [
                'bg-gradient-to-br from-accent-50 to-white border-accent-200',
                'bg-gradient-to-br from-primary-50 to-white border-primary-200',
                'bg-gradient-to-br from-accent-50 to-white border-accent-200',
              ];
              return (
                <Card key={testimonial.id} className={`border-2 ${bgColors[index % 3]}`}>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using LogiCare to streamline their supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button size="lg" variant="secondary" className="bg-white text-accent-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent-600">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
