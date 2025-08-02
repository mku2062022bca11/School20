import React, { useState } from "react";
import {
  Calendar,
  FileText,
  Users,
  CheckCircle,
  Calculator,
  Download,
  Clock,
  ArrowRight,
} from "lucide-react";

const Admissions = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [feeBreakdown, setFeeBreakdown] = useState("annual");
  const [applicationStep, setApplicationStep] = useState(1);

  const admissionTimeline = [
    {
      step: 1,
      title: "Application Notification",
      description:
        "Admission notifications published on website and social media",
      date: "December - January",
      status: "completed",
    },
    {
      step: 2,
      title: "Online Application",
      description: "Submit online application form with required documents",
      date: "January - March",
      status: "active",
    },
    {
      step: 3,
      title: "Document Verification",
      description: "Verification of submitted documents and credentials",
      date: "March - April",
      status: "pending",
    },
    {
      step: 4,
      title: "Assessment & Interview",
      description: "Student assessment and parent interview process",
      date: "April - May",
      status: "pending",
    },
    {
      step: 5,
      title: "Admission Decision",
      description: "Final admission decision and fee payment",
      date: "May - June",
      status: "pending",
    },
  ];

  const feeStructure = {
    prekg: {
      annual: {
        total: 180000,
        admission: 25000,
        tuition: 120000,
        development: 20000,
        activities: 15000,
      },
      quarterly: {
        total: 50000,
        tuition: 30000,
        development: 5000,
        activities: 3750,
        misc: 1250,
      },
      monthly: {
        total: 18000,
        tuition: 12000,
        activities: 1500,
        transport: 2500,
        meals: 2000,
      },
    },
    kg: {
      annual: {
        total: 200000,
        admission: 30000,
        tuition: 135000,
        development: 20000,
        activities: 15000,
      },
      quarterly: {
        total: 55000,
        tuition: 33750,
        development: 5000,
        activities: 3750,
        misc: 1500,
      },
      monthly: {
        total: 20000,
        tuition: 13500,
        activities: 1500,
        transport: 2500,
        meals: 2500,
      },
    },
    primary: {
      annual: {
        total: 250000,
        admission: 35000,
        tuition: 165000,
        development: 25000,
        activities: 25000,
      },
      quarterly: {
        total: 68750,
        tuition: 41250,
        development: 6250,
        activities: 6250,
        misc: 2000,
      },
      monthly: {
        total: 24000,
        tuition: 16500,
        activities: 2500,
        transport: 2500,
        meals: 2500,
      },
    },
    middle: {
      annual: {
        total: 300000,
        admission: 40000,
        tuition: 195000,
        development: 30000,
        activities: 35000,
      },
      quarterly: {
        total: 82500,
        tuition: 48750,
        development: 7500,
        activities: 8750,
        misc: 2500,
      },
      monthly: {
        total: 28000,
        tuition: 19500,
        activities: 3500,
        transport: 2500,
        meals: 2500,
      },
    },
    secondary: {
      annual: {
        total: 350000,
        admission: 45000,
        tuition: 225000,
        development: 35000,
        activities: 45000,
      },
      quarterly: {
        total: 96250,
        tuition: 56250,
        development: 8750,
        activities: 11250,
        misc: 3000,
      },
      monthly: {
        total: 32000,
        tuition: 22500,
        activities: 4500,
        transport: 2500,
        meals: 2500,
      },
    },
    senior: {
      annual: {
        total: 400000,
        admission: 50000,
        tuition: 255000,
        development: 40000,
        activities: 55000,
      },
      quarterly: {
        total: 110000,
        tuition: 63750,
        development: 10000,
        activities: 13750,
        misc: 3500,
      },
      monthly: {
        total: 36000,
        tuition: 25500,
        activities: 5500,
        transport: 2500,
        meals: 2500,
      },
    },
  };

  const documents = [
    { name: "Birth Certificate", required: true, status: "pending" },
    { name: "Previous Academic Records", required: true, status: "pending" },
    { name: "Transfer Certificate", required: false, status: "pending" },
    { name: "Passport Size Photos (4)", required: true, status: "pending" },
    { name: "Medical Certificate", required: true, status: "pending" },
    { name: "Parent ID Proof", required: true, status: "pending" },
    { name: "Address Proof", required: true, status: "pending" },
    {
      name: "Caste Certificate (if applicable)",
      required: false,
      status: "pending",
    },
  ];

  const eligibilityCriteria = {
    prekg: {
      age: "2-3 years",
      cutoff: "As on 31st March",
      requirements: "No prior schooling required",
    },
    kg: {
      age: "3-5 years",
      cutoff: "As on 31st March",
      requirements: "Basic motor skills assessment",
    },
    primary: {
      age: "6-10 years",
      cutoff: "As on 31st March",
      requirements: "Previous class completion certificate",
    },
    middle: {
      age: "11-13 years",
      cutoff: "As on 31st March",
      requirements: "Class V completion & assessment test",
    },
    secondary: {
      age: "14-15 years",
      cutoff: "As on 31st March",
      requirements: "Class VIII completion & entrance test",
    },
    senior: {
      age: "16-17 years",
      cutoff: "As on 31st March",
      requirements: "Class X completion & stream selection",
    },
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
            Admissions 2025
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Join our global community of learners. Begin your child's journey
            towards excellence with our comprehensive admission process designed
            for your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300">
              Start Application
            </button>
            <button className="px-8 py-4 glass-effect text-blue-500 rounded-full hover:neon-glow transition-all duration-300">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Admission Timeline */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Admission Process Timeline
          </h2>

          <div className="max-w-4xl mx-auto">
            {admissionTimeline.map((phase, index) => (
              <div key={phase.step} className="flex items-start space-x-6 mb-8">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                    phase.status === "completed"
                      ? "bg-green-500"
                      : phase.status === "active"
                      ? "bg-blue-500 neon-glow"
                      : "bg-gray-400"
                  }`}
                >
                  {phase.status === "completed" ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    phase.step
                  )}
                </div>
                <div className="flex-1 glass-effect rounded-xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {phase.title}
                    </h3>
                    <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                      {phase.date}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {phase.description}
                  </p>
                  {phase.status === "active" && (
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Take Action
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Calculator */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Fee Calculator
          </h2>

          <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Select Class
                </label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full p-3 rounded-lg border glass-effect text-black" // <-- add text-black
                  style={{ borderColor: "var(--border)" }}
                >
                  <option value="">Choose a class</option>
                  <option value="prekg">Pre-KG</option>
                  <option value="kg">Kindergarten</option>
                  <option value="primary">Primary (I-V)</option>
                  <option value="middle">Middle (VI-VIII)</option>
                  <option value="secondary">Secondary (IX-X)</option>
                  <option value="senior">Senior Secondary (XI-XII)</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Payment Plan
                </label>
                <div className="flex space-x-2">
                  {["annual", "quarterly", "monthly"].map((plan) => (
                    <button
                      key={plan}
                      onClick={() => setFeeBreakdown(plan)}
                      className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                        feeBreakdown === plan
                          ? "bg-blue-500 text-white neon-glow"
                          : "glass-effect text-blue-500 hover:neon-glow"
                      }`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {selectedClass && feeStructure[selectedClass] && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Fee Breakdown ({feeBreakdown})
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(
                      feeStructure[selectedClass][feeBreakdown]
                    ).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center p-3  rounded-lg"
                      >
                        <span
                          className="capitalize"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {key === "total"
                            ? "Total Amount"
                            : key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span
                          className={`font-semibold ${
                            key === "total" ? "text-2xl text-blue-500" : ""
                          }`}
                        >
                          ₹{value.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Quality education by certified teachers",
                      "Access to all school facilities",
                      "Extracurricular activities",
                      "Library and digital resources",
                      "Regular assessments and reports",
                      "Parent-teacher conferences",
                      "Educational technology tools",
                      "Annual events and celebrations",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Required Documents
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 flex items-center justify-between hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="w-6 h-6 text-blue-500" />
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {doc.name}
                    </h3>
                    <span
                      className={`text-sm ${
                        doc.required ? "text-red-500" : "text-gray-500"
                      }`}
                    >
                      {doc.required ? "Required" : "Optional"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-orange-500">Pending</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <Download className="w-5 h-5" />
              <span>Download Document Checklist</span>
            </button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Eligibility Criteria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(eligibilityCriteria).map(([classKey, criteria]) => (
              <div
                key={classKey}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {classKey.slice(0, 2).toUpperCase()}
                </div>
                <h3
                  className="text-xl font-bold mb-4 capitalize"
                  style={{ color: "var(--text-primary)" }}
                >
                  {classKey === "prekg"
                    ? "Pre-KG"
                    : classKey === "kg"
                    ? "Kindergarten"
                    : classKey === "primary"
                    ? "Primary"
                    : classKey === "middle"
                    ? "Middle School"
                    : classKey === "secondary"
                    ? "Secondary"
                    : "Senior Secondary"}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: "var(--text-secondary)" }}>
                      Age Range:
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {criteria.age}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--text-secondary)" }}>
                      Cut-off Date:
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {criteria.cutoff}
                    </span>
                  </div>
                  <div
                    className="pt-2 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <p style={{ color: "var(--text-secondary)" }}>
                      {criteria.requirements}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Registration CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Ready to Apply?
          </h2>
          <p
            className="text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Take the first step towards your child's bright future. Our online
            application process is designed to be simple and user-friendly.
          </p>

          <div className="glass-effect rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <span style={{ color: "white" }}>
                  Application Status
                </span>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                  Open for 2025-26
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Application Benefits
                  </h4>
                  <ul
                    className="space-y-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <li>• Save and continue later</li>
                    <li>• Upload documents easily</li>
                    <li>• Track application status</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Support Available
                  </h4>
                  <ul
                    className="space-y-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <li>• 24/7 technical support</li>
                    <li>• Application assistance</li>
                    <li>• Document guidance</li>
                  </ul>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span className="text-lg font-semibold">
                  Start Online Application
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Need help? Call us at +91 98765 43210 or email
                admissions@everrise.edu
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
