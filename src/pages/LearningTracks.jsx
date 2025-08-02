import React, { useState } from "react";
import {
  BookOpen,
  Beaker,
  Palette,
  Calculator,
  Globe,
  Code,
  Music,
  Play,
} from "lucide-react";

const LearningTracks = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [activeTab, setActiveTab] = useState("cbse");

  const tracks = [
    {
      id: "prekg",
      name: "Pre-KG",
      ages: "2-3 years",
      icon: <Palette className="w-8 h-8" />,
      description:
        "Foundation for lifelong learning through play-based activities",
      features: [
        "Play-based Learning",
        "Motor Skills Development",
        "Social Skills",
        "Creative Expression",
      ],
    },
    {
      id: "kg",
      name: "Kindergarten",
      ages: "3-5 years",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Structured learning with emphasis on reading readiness",
      features: [
        "Phonics & Reading",
        "Number Concepts",
        "Environmental Studies",
        "Art & Craft",
      ],
    },
    {
      id: "primary",
      name: "Primary (I-V)",
      ages: "6-10 years",
      icon: <Calculator className="w-8 h-8" />,
      description: "Building strong academic foundations across all subjects",
      features: [
        "Core Subjects",
        "Language Development",
        "Science Projects",
        "Sports & Fitness",
      ],
    },
    {
      id: "middle",
      name: "Middle (VI-VIII)",
      ages: "11-13 years",
      icon: <Beaker className="w-8 h-8" />,
      description: "Exploration and discovery of interests and talents",
      features: [
        "Subject Specialization",
        "Lab Experiments",
        "Project Work",
        "Leadership Skills",
      ],
    },
    {
      id: "secondary",
      name: "Secondary (IX-X)",
      ages: "14-15 years",
      icon: <Globe className="w-8 h-8" />,
      description: "CBSE Board preparation with comprehensive curriculum",
      features: [
        "Board Exam Prep",
        "Career Guidance",
        "Research Projects",
        "Community Service",
      ],
    },
    {
      id: "senior",
      name: "Senior Secondary (XI-XII)",
      ages: "16-17 years",
      icon: <Code className="w-8 h-8" />,
      description: "Specialized streams for university preparation",
      features: [
        "Stream Selection",
        "Advanced Studies",
        "University Prep",
        "Internships",
      ],
    },
  ];

  const streams = {
    stem: {
      name: "STEM Excellence",
      subjects: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "Biology",
      ],
      icon: "🔬",
      color: "from-blue-500 to-cyan-500",
    },
    arts: {
      name: "Creative Arts",
      subjects: ["Literature", "Fine Arts", "Music", "Drama", "Psychology"],
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    commerce: {
      name: "Commerce & Business",
      subjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "Entrepreneurship",
      ],
      icon: "💼",
      color: "from-green-500 to-emerald-500",
    },
    humanities: {
      name: "Humanities & Social Sciences",
      subjects: [
        "History",
        "Geography",
        "Political Science",
        "Sociology",
        "Philosophy",
      ],
      icon: "📚",
      color: "from-orange-500 to-red-500",
    },
  };

  const learningHubs = [
    {
      name: "Language Lab",
      description:
        "State-of-the-art language learning facility with AI-powered pronunciation tools",
      image: "./LearningTracks/LearningTracksImg1.jpeg",
      features: [
        "Multi-language Support",
        "Interactive Software",
        "Native Speaker Sessions",
        "Cultural Exchange",
      ],
    },
    {
      name: "Coding Studio",
      description: "Modern programming environment for future technologists",
      image: "./LearningTracks/LearningTracksImg2.jpeg",
      features: [
        "Latest Programming Tools",
        "Robotics Kits",
        "AI/ML Projects",
        "Tech Competitions",
      ],
    },
    {
      name: "Robotics Arena",
      description:
        "Innovation space for hands-on STEM learning and robotics competitions",
      image: "./LearningTracks/LearningTracksImg3.jpeg",
      features: [
        "Advanced Robotics Kits",
        "Competition Training",
        "3D Printing",
        "Engineering Design",
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
            Learning Tracks
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Discover our comprehensive educational pathways designed to nurture
            every child's unique potential from early years through senior
            secondary education.
          </p>
        </div>
      </section>

      {/* Age-wise Learning Paths */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Educational Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className={`glass-effect rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:neon-glow ${
                  selectedTrack === track.id ? "neon-glow" : ""
                }`}
                onClick={() =>
                  setSelectedTrack(selectedTrack === track.id ? null : track.id)
                }
              >
                <div className="text-blue-500 mb-4 flex justify-center">
                  {track.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-2 text-center"
                  style={{ color: "var(--text-primary)" }}
                >
                  {track.name}
                </h3>
                <p className="text-center text-blue-500 font-semibold mb-4">
                  {track.ages}
                </p>
                <p
                  className="text-center mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {track.description}
                </p>

                {selectedTrack === track.id && (
                  <div
                    className="border-t pt-6 space-y-2"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {track.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBSE vs International Tracks */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Curriculum Options
          </h2>

          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab("cbse")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "cbse"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-glow"
                  : "glass-effect text-blue-500 hover:neon-glow"
              }`}
            >
              CBSE Track
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "international"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-glow"
                  : "glass-effect text-blue-500 hover:neon-glow"
              }`}
            >
              International Track
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {activeTab === "cbse" ? (
              <>
                <div className="glass-effect rounded-2xl p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    CBSE Curriculum
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Aligned with National Education Policy 2020",
                      "Comprehensive assessment system",
                      "Strong foundation in Indian values and culture",
                      "Preparation for competitive examinations",
                      "Integrated skill development programs",
                      "Multilingual education approach",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-effect rounded-2xl p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                        Holistic Assessment
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Continuous and comprehensive evaluation system
                      </p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900 rounded-lg p-4">
                      <h4 className="font-semibold text-green-600 dark:text-green-400">
                        Skill Development
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Focus on 21st-century skills and competencies
                      </p>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">
                        Cultural Integration
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Balance of Indian heritage and global perspectives
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="glass-effect rounded-2xl p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    International Curriculum
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Cambridge International curriculum",
                      "IB Diploma Programme preparation",
                      "Global perspective and intercultural understanding",
                      "University preparation worldwide",
                      "Research and inquiry-based learning",
                      "International language certifications",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-effect rounded-2xl p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    International Features
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">
                        Global Recognition
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Accepted by universities worldwide
                      </p>
                    </div>
                    <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-4">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                        Critical Thinking
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Emphasis on analytical and problem-solving skills
                      </p>
                    </div>
                    <div className="bg-teal-100 dark:bg-teal-900 rounded-lg p-4">
                      <h4 className="font-semibold text-teal-600 dark:text-teal-400">
                        Cultural Diversity
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Multicultural learning environment
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Subject Streams Carousel */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Senior Secondary Streams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(streams).map(([key, stream]) => (
              <div
                key={key}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300 rotate-3d"
              >
                <div className="text-6xl mb-6">{stream.icon}</div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stream.name}
                </h3>
                <div className="space-y-2">
                  {stream.subjects.map((subject, index) => (
                    <div
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r ${stream.color}`}
                    >
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Hubs */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Specialized Learning Hubs
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningHubs.map((hub, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={hub.image}
                    alt={hub.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {hub.name}
                  </h3>
                  <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {hub.description}
                  </p>
                  <div className="space-y-2">
                    {hub.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Curriculum Walkthrough */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Parent Curriculum Walkthrough
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Get an inside look at our innovative curriculum and teaching
            methodologies designed to prepare your child for success in the 21st
            century.
          </p>

          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <button className="relative z-10 w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 neon-glow">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Curriculum Overview 2025</h3>
                <p className="text-sm opacity-90">Duration: 15 minutes</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-left">
                <h4
                  className="font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  What You'll Learn
                </h4>
                <ul
                  className="space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>• Curriculum structure</li>
                  <li>• Assessment methods</li>
                  <li>• Technology integration</li>
                </ul>
              </div>
              <div className="text-left">
                <h4
                  className="font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Key Features
                </h4>
                <ul
                  className="space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>• Interactive demonstrations</li>
                  <li>• Teacher interviews</li>
                  <li>• Student showcases</li>
                </ul>
              </div>
              <div className="text-left">
                <h4
                  className="font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Benefits
                </h4>
                <ul
                  className="space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>• Informed decisions</li>
                  <li>• Clear expectations</li>
                  <li>• Parent involvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningTracks;
