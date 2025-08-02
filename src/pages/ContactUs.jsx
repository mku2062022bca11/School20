import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Download,
  ExternalLink,
  Globe,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: "",
  });

  const campusLocations = [
    {
      name: "Main Campus - Delhi",
      address: "123 Education Avenue, New Delhi, India 110001",
      phone: "+91 98765 43210",
      email: "delhi@everrise.edu",
      timings: "Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM",
      coordinates: { lat: 28.6139, lng: 77.209 },
      facilities: [
        "Administrative Office",
        "Primary & Secondary School",
        "Sports Complex",
        "Library",
      ],
    },
    {
      name: "Branch Campus - Mumbai",
      address: "456 Learning Street, Mumbai, Maharashtra 400001",
      phone: "+91 98765 43211",
      email: "mumbai@everrise.edu",
      timings: "Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM",
      coordinates: { lat: 19.076, lng: 72.8777 },
      facilities: ["Secondary School", "STEM Labs", "Arts Center", "Cafeteria"],
    },
    {
      name: "International Campus - Bangalore",
      address: "789 Global Education Hub, Bangalore, Karnataka 560001",
      phone: "+91 98765 43212",
      email: "bangalore@everrise.edu",
      timings: "Mon-Fri: 8:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      facilities: [
        "International Programs",
        "Research Center",
        "Innovation Labs",
        "Dormitories",
      ],
    },
  ];

  const quickContacts = [
    {
      department: "Admissions Office",
      phone: "+91 98765 43213",
      email: "admissions@everrise.edu",
      timings: "Mon-Sat: 9:00 AM - 6:00 PM",
      icon: "🎓",
    },
    {
      department: "Academic Affairs",
      phone: "+91 98765 43214",
      email: "academics@everrise.edu",
      timings: "Mon-Fri: 8:30 AM - 5:30 PM",
      icon: "📚",
    },
    {
      department: "Student Support",
      phone: "+91 98765 43215",
      email: "support@everrise.edu",
      timings: "Mon-Fri: 9:00 AM - 5:00 PM",
      icon: "🤝",
    },
    {
      department: "Transport Services",
      phone: "+91 98765 43216",
      email: "transport@everrise.edu",
      timings: "Mon-Fri: 7:00 AM - 6:00 PM",
      icon: "🚌",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-8">
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            We're here to help! Reach out to us for admissions, academic
            inquiries, or any questions about our programs and services.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-effect rounded-2xl p-8">
              <h2
                className="text-3xl font-bold mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border glass-effect"
                      style={{ borderColor: "var(--border)" }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-lg border glass-effect"
                      style={{ borderColor: "var(--border)" }}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border glass-effect"
                      style={{ borderColor: "var(--border)" }}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Inquiry Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border glass-effect"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academic Programs</option>
                      <option value="facilities">Campus Facilities</option>
                      <option value="transport">Transportation</option>
                      <option value="careers">Career Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 rounded-lg border glass-effect"
                    style={{ borderColor: "var(--border)" }}
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full p-3 rounded-lg border glass-effect resize-none"
                    style={{ borderColor: "var(--border)" }}
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span className="font-semibold">Send Message</span>
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Quick Contacts
                </h3>

                <div className="space-y-6">
                  {quickContacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-3xl">{contact.icon}</div>
                      <div className="flex-1">
                        <h4
                          className="font-bold mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {contact.department}
                        </h4>
                        <div
                          className="space-y-1 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>{contact.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>{contact.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{contact.timings}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp & Social */}
              <div className="glass-effect rounded-2xl p-8">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Instant Support
                </h3>

                <div className="space-y-4">
                  <button className="w-full p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center space-x-3">
                    <MessageSquare className="w-6 h-6" />
                    <div className="text-left">
                      <div className="font-semibold">WhatsApp Chat</div>
                      <div className="text-sm opacity-90">
                        Get instant responses
                      </div>
                    </div>
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-center">
                      <div className="font-semibold">Facebook</div>
                      <div className="text-xs opacity-90">@EverRiseGlobal</div>
                    </button>
                    <button className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-center">
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-xs opacity-90">EverRise School</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Our Campus Locations
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campusLocations.map((campus, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-8 h-8 text-blue-500" />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {campus.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {campus.address}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {campus.phone}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {campus.email}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {campus.timings}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-6 pt-6 border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Facilities Available:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {campus.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map & Resources */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Section */}
            <div className="glass-effect rounded-2xl p-8">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Find Us on Map
              </h3>

              <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-4 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <Globe className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">
                      Interactive Campus Map
                    </h4>
                    <p className="opacity-90">Click to explore our locations</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {campusLocations.map((campus, index) => (
                  <button
                    key={index}
                    className="p-3 glass-effect rounded-lg text-center hover:neon-glow transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <div
                      className="text-xs font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {campus.name.split(" - ")[1]}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Resources & Downloads */}
            <div className="glass-effect rounded-2xl p-8">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Resources & Downloads
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "School Prospectus 2025",
                    type: "PDF",
                    size: "8.5 MB",
                    description:
                      "Complete guide to our programs and facilities",
                  },
                  {
                    title: "Admission Guidelines",
                    type: "PDF",
                    size: "2.3 MB",
                    description:
                      "Step-by-step admission process and requirements",
                  },
                  {
                    title: "Fee Structure 2025-26",
                    type: "PDF",
                    size: "1.8 MB",
                    description: "Detailed fee breakdown for all grades",
                  },
                  {
                    title: "Academic Calendar",
                    type: "PDF",
                    size: "1.2 MB",
                    description: "Important dates and school events",
                  },
                  {
                    title: "Transportation Routes",
                    type: "PDF",
                    size: "3.1 MB",
                    description: "Bus routes and timings for all areas",
                  },
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-500 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-1">
                      <h4
                        className="font-semibold mb-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {resource.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {resource.description}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded">
                          {resource.type}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {resource.size}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white text-center">
                <h4 className="font-bold mb-2">Need More Information?</h4>
                <p className="text-sm opacity-90 mb-4">
                  Schedule a personal consultation with our admissions team
                </p>
                <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Emergency Contact */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            We're Here to Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-2xl p-8">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Office Hours
              </h3>
              <div
                className="space-y-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <p
                className="text-xs mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                *Emergency services available 24/7
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <Phone className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Emergency Contact
              </h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-red-500">
                  +91 98765 43999
                </div>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  24/7 Emergency Helpline
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  For urgent matters related to student safety, medical
                  emergencies, or security concerns
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p
              className="text-lg mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Have a question? We typically respond within 24 hours during
              business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300">
                Schedule Campus Visit
              </button>
              <button className="px-8 py-4 glass-effect text-blue-500 rounded-full hover:neon-glow transition-all duration-300">
                Live Chat Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
