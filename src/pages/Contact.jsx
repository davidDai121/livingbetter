import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch for wholesale inquiries and partnership opportunities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-6">Business Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-accent mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">livingbettertrade@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-accent mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">
                    5705 Diehl Trl, Apt 10101<br />
                    Austin, Texas 78727
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
