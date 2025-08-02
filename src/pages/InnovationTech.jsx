import React, { useState } from "react";
import {
  Cpu,
  Zap,
  Bot,
  Headset as VrHeadset,
  Cloud,
  Code,
  Trophy,
  Lightbulb,
  Monitor,
  Smartphone,
} from "lucide-react";

const InnovationTech = () => {
  const [activeDemo, setActiveDemo] = useState("ai");

  const techFeatures = [
    {
      id: "smart-classroom",
      title: "Smart Classrooms",
      description:
        "Interactive whiteboards, IoT sensors, and AI-powered learning analytics",
      icon: <Monitor className="w-12 h-12" />,
      details: [
        "Interactive 4K displays in every classroom",
        "Real-time attendance tracking via facial recognition",
        "Adaptive lighting and climate control",
        "Voice-activated learning assistants",
        "Seamless device integration for BYOD",
      ],
      image: "./Innovation/InnovationImg1.jpeg",
    },
    {
      id: "vr-labs",
      title: "Virtual Reality Labs",
      description: "Immersive learning experiences across all subjects",
      icon: <VrHeadset className="w-12 h-12" />,
      details: [
        "VR headsets for immersive history lessons",
        "Virtual science experiments and simulations",
        "3D geometry and mathematics visualization",
        "Virtual field trips to global landmarks",
        "Language immersion in virtual environments",
      ],
      image: "./Innovation/InnovationImg2.jpeg",
    },
    {
      id: "gamified-learning",
      title: "Gamified Learning",
      description:
        "Game-based education platform with rewards and achievements",
      icon: <Trophy className="w-12 h-12" />,
      details: [
        "Educational games aligned with curriculum",
        "Progress tracking with XP and levels",
        "Collaborative multiplayer learning challenges",
        "Achievement badges and certificates",
        "Personalized learning paths based on performance",
      ],
      image: "./Innovation/InnovationImg3.jpeg",
    },
    {
      id: "ai-powered",
      title: "AI-Powered Education",
      description: "Artificial intelligence enhancing personalized learning",
      icon: <Bot className="w-12 h-12" />,
      details: [
        "Personalized learning recommendations",
        "Automated essay grading and feedback",
        "Intelligent tutoring systems",
        "Predictive analytics for student performance",
        "Natural language processing for Q&A",
      ],
      image: "./Innovation/InnovationImg4.jpeg",
    },
  ];

  const aiIntegrations = [
    {
      feature: "Smart Attendance",
      description:
        "Facial recognition system for automated attendance tracking",
      benefit: "99% accuracy, saves 15 minutes per class",
      icon: "👤",
    },
    {
      feature: "Intelligent Timetabling",
      description: "AI optimizes schedules based on resources and preferences",
      benefit: "Reduces conflicts by 90%, improves efficiency",
      icon: "📅",
    },
    {
      feature: "Automated Grading",
      description:
        "AI-powered evaluation for objective and subjective assessments",
      benefit: "Instant feedback, consistent evaluation standards",
      icon: "📊",
    },
    {
      feature: "Learning Analytics",
      description: "Data-driven insights into student learning patterns",
      benefit: "Early intervention, personalized support",
      icon: "📈",
    },
  ];

  const cloudPortalFeatures = [
    "Student dashboard with real-time grades and progress",
    "Parent portal for monitoring child's academic journey",
    "Teacher tools for curriculum planning and assessment",
    "Administrative dashboard for school management",
    "Mobile app for on-the-go access",
    "Secure document storage and sharing",
    "Communication tools for announcements and messaging",
    "Integration with Google Workspace and Microsoft 365",
  ];

  const techClubs = [
    {
      name: "Coding Club",
      description: "Learn programming languages and software development",
      activities: ["Python", "JavaScript", "Mobile Apps", "Web Development"],
      achievements: "National Coding Championship Winners 2024",
      badge: "💻",
    },
    {
      name: "Robotics Team",
      description: "Build and program robots for competitions",
      activities: ["Arduino", "Raspberry Pi", "Robot Design", "Automation"],
      achievements: "International Robotics Olympiad Finalists",
      badge: "🤖",
    },
    {
      name: "AI Research Group",
      description: "Explore artificial intelligence and machine learning",
      activities: [
        "Machine Learning",
        "Data Science",
        "Neural Networks",
        "Ethics in AI",
      ],
      achievements: "Published research in student AI journal",
      badge: "🧠",
    },
    {
      name: "Hackathon Squad",
      description: "Participate in coding competitions and hackathons",
      activities: [
        "Problem Solving",
        "Team Collaboration",
        "Innovation",
        "Time Management",
      ],
      achievements: "Winners of 5 national hackathons",
      badge: "⚡",
    },
    {
      name: "Cyber Security Club",
      description: "Learn about digital security and ethical hacking",
      activities: [
        "Network Security",
        "Ethical Hacking",
        "Digital Forensics",
        "Privacy",
      ],
      achievements: "Certified Ethical Hackers - 15 students",
      badge: "🔐",
    },
    {
      name: "Maker Lab",
      description: "3D printing, IoT projects, and hardware innovation",
      activities: ["3D Design", "IoT Projects", "Electronics", "Prototyping"],
      achievements: "Innovation Fair Grand Prize 2024",
      badge: "🔧",
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
            Innovation & Technology
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Pioneering the future of education through cutting-edge technology,
            innovative teaching methods, and digital literacy programs that
            prepare students for tomorrow's challenges.
          </p>
        </div>
      </section>

      {/* Technology Features Showcase */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Revolutionary Learning Technologies
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {techFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="glass-effect rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-blue-500">{feature.icon}</div>
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {feature.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration Dashboard */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            AI-Powered School Management
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiIntegrations.map((integration, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300 rotate-3d"
              >
                <div className="text-6xl mb-6">{integration.icon}</div>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {integration.feature}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {integration.description}
                </p>
                <div className="px-3 py-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg text-xs font-semibold">
                  {integration.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Portal Demo */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            EverRise Cloud Portal
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-effect rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Cloud className="w-12 h-12 text-blue-500" />
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      All-in-One Education Platform
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      Seamlessly connect students, parents, and teachers
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {cloudPortalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300">
                Experience Live Demo
              </button>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-4 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full"></div>
                      <div className="flex-1 h-4 bg-white bg-opacity-20 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-white bg-opacity-20 rounded"></div>
                      <div className="h-16 bg-white bg-opacity-20 rounded"></div>
                      <div className="h-16 bg-white bg-opacity-20 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white bg-opacity-20 rounded"></div>
                      <div className="h-3 bg-white bg-opacity-20 rounded w-3/4"></div>
                      <div className="h-3 bg-white bg-opacity-20 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">Student Dashboard</h4>
                  <p className="text-sm opacity-90">
                    Real-time progress tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Clubs & Hackathons */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Technology Clubs & Competitions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techClubs.map((club, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{club.badge}</div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {club.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {club.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4
                      className="font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {club.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Trophy className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        Recent Achievement
                      </span>
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-300">
                      {club.achievements}
                    </p>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Join Club
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Literacy Pledge */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Digital Literacy Pledge
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Every EverRise student commits to responsible digital citizenship
            and ethical use of technology for learning and personal growth.
          </p>

          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Our Digital Commitments:
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Use technology responsibly and ethically",
                    "Respect digital privacy and intellectual property",
                    "Practice cyber safety and security",
                    "Promote inclusive digital communities",
                    "Continuously learn and adapt to new technologies",
                    "Use AI and automation to enhance, not replace, human creativity",
                  ].map((commitment, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span style={{ color: "var(--text-secondary)" }}>
                        {commitment}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Digital Skills Mastery:
                </h3>
                <div className="space-y-3">
                  {[
                    { skill: "Coding & Programming", level: 90 },
                    { skill: "Digital Design", level: 85 },
                    { skill: "Data Analysis", level: 80 },
                    { skill: "Cyber Security", level: 75 },
                    { skill: "AI & Machine Learning", level: 70 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span style={{ color: "var(--text-primary)" }}>
                          {skill.skill}
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-blue">
              <h4 className="text-lg font-bold mb-2">
                Take the Digital Literacy Pledge
              </h4>
              <p className="text-sm mb-4 opacity-90">
                Join thousands of students committed to responsible technology
                use
              </p>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Sign the Pledge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Learning CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Shape the Future with Technology
          </h2>
          <p
            className="text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Experience education reimagined through innovation. Join us in
            creating tomorrow's leaders equipped with cutting-edge digital
            skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>Download Mobile App</span>
            </button>
            <button className="px-8 py-4 glass-effect text-blue-500 rounded-full hover:neon-glow transition-all duration-300 flex items-center justify-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Explore Coding Programs</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationTech;
