import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

/**
 * About Us Page
 * Company mission, vision, and industry focus
 */
export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 via-white to-primary-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About LogiCare India
            </h1>
            <p className="text-xl text-gray-600">
              Empowering businesses across India with technology-driven logistics solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  To revolutionize India's logistics industry by making freight transportation, 
                  warehousing, and fulfillment accessible, reliable, and affordable for businesses of all sizes.
                </p>
                <p className="text-lg text-gray-700">
                  We believe that every business, regardless of size, deserves world-class logistics 
                  infrastructure to compete and thrive in today's market.
                </p>
              </div>
              <Card className="bg-gradient-to-br from-accent-100 to-accent-50 border-2 border-accent-300 p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission-Driven</h3>
                  <p className="text-gray-700">
                    Delivering excellence in every shipment, every day
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-gradient-to-br from-primary-100 to-primary-50 border-2 border-primary-300 p-8 shadow-lg order-2 lg:order-1">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔮</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Future-Ready</h3>
                  <p className="text-gray-700">
                    Building the logistics infrastructure for tomorrow
                  </p>
                </div>
              </Card>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  To become India's most trusted and technology-forward logistics platform, 
                  connecting businesses with seamless supply chain solutions.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We envision a future where logistics is no longer a barrier to business growth, 
                  but a competitive advantage that enables companies to scale efficiently and serve 
                  customers better.
                </p>
                <p className="text-lg text-gray-700">
                  By 2030, we aim to serve over 1 million businesses and establish a network 
                  that covers every pin code in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  We deliver on our promises. Every shipment, every time, with complete transparency.
                </p>
              </Card>

              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our technology and processes to serve you better.
                </p>
              </Card>

              <Card className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We grow together. Your success is our success, and we're committed to your growth.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'E-commerce',
                'Manufacturing',
                'Retail',
                'Healthcare',
                'Automotive',
                'FMCG',
                'Textiles',
                'Electronics',
              ].map((industry, index) => {
                const bgColors = [
                  'bg-gradient-to-br from-accent-50 to-accent-100/50 border-accent-200',
                  'bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200',
                  'bg-gradient-to-br from-accent-50 to-accent-100/50 border-accent-200',
                  'bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200',
                ];
                return (
                  <Card key={industry} className={`text-center border-2 ${bgColors[index % 4]}`}>
                    <div className="font-semibold text-gray-900">{industry}</div>
                  </Card>
                );
              })}
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                We serve businesses across diverse industries with customized logistics solutions 
                tailored to their specific needs.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="primary">
                  Discuss Your Industry Needs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
