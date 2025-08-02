import React, { useState } from "react";
import {
  FileText,
  Users,
  AlertTriangle,
  Shield,
  Clock,
  CheckCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Guidelines = () => {
  const [expandedPolicy, setExpandedPolicy] = useState(null);
  const [selectedUniformCategory, setSelectedUniformCategory] =
    useState("boys-primary");

  const policies = [
    {
      id: "conduct",
      title: "Code of Conduct",
      icon: <Users className="w-8 h-8" />,
      summary:
        "Behavioral expectations and disciplinary procedures for all community members",
      sections: [
        {
          title: "Core Values",
          content:
            "Respect, Integrity, Excellence, Innovation, and Global Citizenship guide all interactions within our school community.",
        },
        {
          title: "Expected Behavior",
          content:
            "Students are expected to demonstrate courtesy, honesty, responsibility, and respect for diversity in all school activities.",
        },
        {
          title: "Disciplinary Process",
          content:
            "Progressive discipline system including counseling, community service, and parent conferences before suspension.",
        },
      ],
    },
    {
      id: "assessment",
      title: "Assessment Policy",
      icon: <FileText className="w-8 h-8" />,
      summary: "Comprehensive evaluation methods and grading criteria",
      sections: [
        {
          title: "Continuous Assessment",
          content:
            "Regular formative and summative assessments throughout the academic year to track student progress.",
        },
        {
          title: "Grading Scale",
          content:
            "A+ (91-100%), A (81-90%), B+ (71-80%), B (61-70%), C+ (51-60%), C (41-50%), D (33-40%)",
        },
        {
          title: "Parent Communication",
          content:
            "Regular progress reports, parent-teacher conferences, and digital portal access for real-time updates.",
        },
      ],
    },
    {
      id: "attendance",
      title: "Attendance Policy",
      icon: <Clock className="w-8 h-8" />,
      summary: "Attendance requirements and procedures for absences",
      sections: [
        {
          title: "Minimum Requirement",
          content:
            "85% attendance required for promotion to next grade. Medical certificates required for extended absences.",
        },
        {
          title: "Reporting Absences",
          content:
            "Parents must notify school by 9:00 AM on the day of absence through phone call or school app.",
        },
        {
          title: "Make-up Work",
          content:
            "Students have 3 days to complete missed assignments upon return from absence.",
        },
      ],
    },
    {
      id: "technology",
      title: "Technology Usage",
      icon: <Shield className="w-8 h-8" />,
      summary: "Digital citizenship and responsible technology use guidelines",
      sections: [
        {
          title: "Device Policy",
          content:
            "Personal devices allowed with permission. School WiFi for educational purposes only.",
        },
        {
          title: "Digital Citizenship",
          content:
            "Respectful online communication, no cyberbullying, proper citation of digital sources.",
        },
        {
          title: "Consequences",
          content:
            "Technology misuse results in device confiscation and digital citizenship counseling.",
        },
      ],
    },
  ];

  const uniformGuide = {
    "boys-primary": {
      category: "Boys Primary (I-V)",
      items: [
        {
          item: "Shirt",
          description: "Light blue formal shirt with school logo",
          image: "👔",
        },
        {
          item: "Trousers",
          description: "Navy blue formal trousers",
          image: "👖",
        },
        {
          item: "Tie",
          description: "School tie with house colors",
          image: "👔",
        },
        {
          item: "Shoes",
          description: "Black leather formal shoes",
          image: "👞",
        },
        { item: "Socks", description: "Navy blue socks", image: "🧦" },
      ],
    },
    "girls-primary": {
      category: "Girls Primary (I-V)",
      items: [
        {
          item: "Shirt",
          description: "Light blue formal shirt with school logo",
          image: "👕",
        },
        { item: "Skirt", description: "Navy blue pleated skirt", image: "👗" },
        {
          item: "Tie",
          description: "School tie with house colors",
          image: "🎀",
        },
        {
          item: "Shoes",
          description: "Black leather formal shoes",
          image: "👠",
        },
        { item: "Socks", description: "White knee-high socks", image: "🧦" },
      ],
    },
    "boys-secondary": {
      category: "Boys Secondary (VI-XII)",
      items: [
        {
          item: "Shirt",
          description: "White formal shirt with school emblem",
          image: "👔",
        },
        {
          item: "Trousers",
          description: "Charcoal grey formal trousers",
          image: "👖",
        },
        {
          item: "Blazer",
          description: "Navy blue blazer with school crest",
          image: "🥽",
        },
        {
          item: "Tie",
          description: "School tie with grade-specific colors",
          image: "👔",
        },
        {
          item: "Shoes",
          description: "Black leather formal shoes",
          image: "👞",
        },
      ],
    },
    "girls-secondary": {
      category: "Girls Secondary (VI-XII)",
      items: [
        {
          item: "Shirt",
          description: "White formal shirt with school emblem",
          image: "👕",
        },
        {
          item: "Skirt/Trousers",
          description: "Charcoal grey skirt or formal trousers",
          image: "👗",
        },
        {
          item: "Blazer",
          description: "Navy blue blazer with school crest",
          image: "🧥",
        },
        {
          item: "Tie",
          description: "School tie with grade-specific colors",
          image: "🎀",
        },
        {
          item: "Shoes",
          description: "Black leather formal shoes",
          image: "👠",
        },
      ],
    },
    sports: {
      category: "Sports Uniform (All Grades)",
      items: [
        {
          item: "T-Shirt",
          description: "House color t-shirt with school logo",
          image: "👕",
        },
        { item: "Shorts", description: "Navy blue sports shorts", image: "🩳" },
        {
          item: "Track Suit",
          description: "School tracksuit for winter sports",
          image: "🏃‍♂️",
        },
        {
          item: "Sports Shoes",
          description: "White sports shoes with good grip",
          image: "👟",
        },
        {
          item: "Accessories",
          description: "House color cap and water bottle",
          image: "🧢",
        },
      ],
    },
  };

  const safetyPosters = [
    {
      title: "Anti-Bullying Initiative",
      description:
        "Zero tolerance policy for bullying with support systems for victims",
      actions: [
        "Report bullying incidents immediately",
        "Seek help from counselors",
        "Stand up for peers",
        "Create inclusive environment",
      ],
      color: "from-red-500 to-pink-500",
      icon: "🛡️",
    },
    {
      title: "Digital Safety Guidelines",
      description: "Safe internet practices and cyberbullying prevention",
      actions: [
        "Protect personal information online",
        "Report inappropriate content",
        "Use strong passwords",
        "Think before sharing",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "🔒",
    },
    {
      title: "Emergency Procedures",
      description: "Safety protocols for various emergency situations",
      actions: [
        "Know evacuation routes",
        "Follow teacher instructions",
        "Stay calm during drills",
        "Report safety concerns",
      ],
      color: "from-orange-500 to-red-500",
      icon: "🚨",
    },
    {
      title: "Health & Wellness",
      description: "Mental and physical health support resources",
      actions: [
        "Seek counseling when needed",
        "Maintain work-life balance",
        "Practice stress management",
        "Build healthy relationships",
      ],
      color: "from-green-500 to-emerald-500",
      icon: "💚",
    },
  ];

  const parentGuidelines = [
    {
      category: "Academic Support",
      items: [
        "Monitor daily homework completion",
        "Establish regular study schedule at home",
        "Communicate with teachers about concerns",
        "Attend parent-teacher conferences",
        "Use school portal to track progress",
      ],
    },
    {
      category: "Communication",
      items: [
        "Check school communications daily",
        "Respond to teacher messages promptly",
        "Update contact information when changed",
        "Use official channels for school communication",
        "Respect teacher professional boundaries",
      ],
    },
    {
      category: "Health & Safety",
      items: [
        "Inform school of health conditions",
        "Send medications with proper documentation",
        "Report absences by 9:00 AM",
        "Ensure child is well before sending to school",
        "Follow pickup/drop-off procedures",
      ],
    },
    {
      category: "School Events",
      items: [
        "Participate in school activities and events",
        "Volunteer for school improvement initiatives",
        "Support fundraising activities",
        "Attend school performances and competitions",
        "Respect school policies during events",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-8">
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            School Guidelines
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Clear policies and guidelines that ensure a safe, inclusive, and
            conducive learning environment for all members of our school
            community.
          </p>
        </div>
      </section>

      {/* Policy Grid */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            School Policies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <div
                key={policy.id}
                className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-blue-500">{policy.icon}</div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {policy.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {policy.summary}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {policy.sections.map((section, index) => (
                    <div
                      key={index}
                      className="cursor-pointer"
                      onClick={() =>
                        setExpandedPolicy(
                          expandedPolicy === `${policy.id}-${index}`
                            ? null
                            : `${policy.id}-${index}`
                        )
                      }
                    >
                      <div className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        {expandedPolicy === `${policy.id}-${index}` ? (
                          <ChevronDown className="w-4 h-4 text-blue-500" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-blue-500" />
                        )}
                        <span
                          className="font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {section.title}
                        </span>
                      </div>

                      {expandedPolicy === `${policy.id}-${index}` && (
                        <div className="mt-2 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                          <p
                            className="text-sm"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {section.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uniform Guide */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Uniform Guidelines
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(uniformGuide).map(([key, guide]) => (
              <button
                key={key}
                onClick={() => setSelectedUniformCategory(key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedUniformCategory === key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-glow"
                    : "glass-effect text-blue-500 hover:neon-glow"
                }`}
              >
                {guide.category}
              </button>
            ))}
          </div>

          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3
              className="text-2xl font-bold text-center mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              {uniformGuide[selectedUniformCategory].category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uniformGuide[selectedUniformCategory].items.map(
                (uniform, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-500 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{uniform.image}</div>
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {uniform.item}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {uniform.description}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-xl">
              <h4 className="font-bold mb-2 text-blue-600 dark:text-blue-400">
                Important Notes:
              </h4>
              <ul
                className="text-sm space-y-1"
                style={{ color: "var(--text-secondary)" }}
              >
                <li>
                  • All uniforms must be properly fitted and well-maintained
                </li>
                <li>• School logo and badges should be clearly visible</li>
                <li>• Hair accessories should match uniform colors</li>
                <li>• Uniform supplier details available at school office</li>
                <li>• Special occasion uniforms may vary for events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Wellness Posters */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Safety & Wellness
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyPosters.map((poster, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-6xl mb-6">{poster.icon}</div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {poster.title}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {poster.description}
                </p>

                <div className="space-y-2">
                  {poster.actions.map((action, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-left"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {action}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-6 w-full px-4 py-2 bg-gradient-to-r ${poster.color} text-white rounded-lg hover:shadow-lg transition-all duration-300`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Guidelines */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Parent Guidelines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentGuidelines.map((guideline, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  {guideline.category}
                </h3>
                <div className="space-y-3">
                  {guideline.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Questions About Guidelines?
              </h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Our administrative team is here to help clarify any policies or
                procedures. Contact us for detailed explanations or specific
                situations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300">
                  Contact Administration
                </button>
                <button className="px-6 py-3 glass-effect text-blue-500 rounded-full hover:neon-glow transition-all duration-300">
                  Download Handbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guidelines;
