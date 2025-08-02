import React, { useEffect, useState } from "react";
import {
  Globe,
  Star,
  Users,
  Award,
  BookOpen,
  Zap,
  ArrowRight,
  Play,
} from "lucide-react";

const Home = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [principalMessage, setPrincipalMessage] = useState("");

  const stats = [
    "10+ Countries Represented",
    "3 State-of-the-Art Campuses",
    "5000+ Successful Alumni",
    "25+ Years of Excellence",
  ];

  const messages = [
    "Welcome to the future of education at OB365 School!",
    "Where innovation meets tradition in learning.",
    "Empowering minds for a sustainable tomorrow.",
    "Join our global community of learners and leaders.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
      setPrincipalMessage(randomMessage);
    }, 5000);
    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full morphing-animation"></div>
          <div
            className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full morphing-animation"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full morphing-animation"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Morphing Globe */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Globe className="w-24 h-24 text-blue-500 morphing-animation floating-animation" />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
            OB365 School
          </h1>
          <h2
            className="text-2xl md:text-4xl font-light mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Shaping Tomorrow's Leaders Today
          </h2>
          <p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Experience the future of education with our innovative CBSE
            curriculum, cutting-edge technology, and global perspective that
            prepares students for success in an interconnected world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span className="text-lg font-semibold">Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass-effect text-blue-500 rounded-full hover:neon-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span className="text-lg font-semibold">Virtual Tour</span>
            </button>
          </div>

          {/* Stats Carousel */}
          <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
            <div
              className="text-xl font-semibold text-center transition-all duration-500"
              style={{ color: "var(--text-primary)" }}
            >
              {stats[currentStat]}
            </div>
          </div>
        </div>
      </section>

      {/* Why EverRise Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "var(--text-primary)" }}
          >
            Why Choose EverRise?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "CBSE Excellence",
                description:
                  "Comprehensive curriculum aligned with global standards and innovative teaching methodologies.",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Smart Technology",
                description:
                  "AI-powered learning platforms, VR labs, and digital classrooms for immersive education.",
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Global Perspective",
                description:
                  "International exposure, cultural exchange programs, and multilingual education.",
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Holistic Development",
                description:
                  "Focus on academic excellence, character building, and life skills development.",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Award-Winning Faculty",
                description:
                  "Highly qualified educators with international teaching experience and credentials.",
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Innovation Hub",
                description:
                  "State-of-the-art facilities including robotics labs, maker spaces, and research centers.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300 rotate-3d group"
              >
                <div
                  className="text-blue-500 mb-6 flex justify-center floating-animation"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Ticker */}
      <section
        className="py-12"
        style={{ backgroundColor: "var(--bg-accent)" }}
      >
        <div className="container mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Message from Principal
            </h3>
            <div
              className="text-lg italic transition-all duration-500"
              style={{ color: "var(--text-secondary)" }}
            >
              "{principalMessage || messages[0]}"
            </div>
            <div
              className="mt-4 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              - Dr. Sarah Johnson, Principal
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Wall */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Recognized Excellence
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "CBSE Affiliated",
              "ISO 9001:2015",
              "Green School Certified",
              "STEM Excellence Award",
              "Best International School",
              "Digital Innovation Award",
              "Excellence in Education",
              "Future Ready School",
            ].map((badge, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 text-center hover:neon-glow transition-all duration-300 cursor-pointer rotate-3d"
              >
                <div className="text-2xl mb-2">🏆</div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
