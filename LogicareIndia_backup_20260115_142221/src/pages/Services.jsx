import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { services } from '../data/services';

/**
 * Services Page
 * Detailed view of all LogiCare services
 */
export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 via-white to-primary-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Complete Logistics Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From freight transportation to warehousing, tracking, and API integrations - 
              we provide end-to-end logistics services to power your business growth.
            </p>
            <Link to="/pricing">
              <Button size="lg" variant="primary">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 via-white/80 to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const bgGradients = [
                'bg-gradient-to-br from-accent-50 to-accent-100/30',
                'bg-gradient-to-br from-primary-50 to-primary-100/30',
                'bg-gradient-to-br from-accent-50 to-accent-100/30',
                'bg-gradient-to-br from-primary-50 to-primary-100/30',
              ];
              return (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <Card className={`${bgGradients[index % 4]} border-2 border-accent-200 p-8`}>
                    <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <p className="text-gray-600 font-medium">{service.title} Visualization</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Our team can design a logistics solution tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="primary">
                Contact Our Team
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
