import React, { useEffect, useRef } from "react";
import { Users, Target, Eye, Heart, Award, Globe } from "lucide-react";

const WhoWeAre = () => {
  const scrollRef = useRef(null);

  const principles = [
    {
      title: "Innovation in Learning",
      description:
        "Embracing cutting-edge technology and pedagogical approaches to create engaging learning experiences.",
      icon: "🚀",
    },
    {
      title: "Global Citizenship",
      description:
        "Fostering international mindedness and cultural awareness in our diverse student community.",
      icon: "🌍",
    },
    {
      title: "Character Development",
      description:
        "Building integrity, empathy, and leadership qualities that define tomorrow's leaders.",
      icon: "💎",
    },
    {
      title: "Academic Excellence",
      description:
        "Maintaining the highest standards of education while nurturing individual talents and abilities.",
      icon: "📚",
    },
  ];

  const boardMembers = [
    {
      name: "Dr. Rajesh Mehta",
      position: "Chairman, Board of Governors",
      background: "Former Education Secretary, Government of India",
      image: "./Who/WhoweareImg1.jpeg",
    },
    {
      name: "Prof. Anita Sharma",
      position: "Vice Chairperson",
      background: "Former Director, NCERT",
      image: "./Who/WhoweareImg2.jpeg",
    },
    {
      name: "Dr. Michael Chen",
      position: "International Advisor",
      background: "Former Principal, Singapore International School",
      image: "./Who/WhoweareImg3.jpeg",
    },
  ];

  const leadership = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      background:
        "PhD in Educational Leadership, Harvard University. 20+ years in international education.",
      image: "./Who/WhoweareImg4.jpeg",
    },
    {
      name: "Mr. Arjun Patel",
      position: "Dean of Academics",
      background:
        "Former IB Coordinator with expertise in curriculum development and assessment.",
      image: " ./Who/WhoweareImg5.jpeg",
    },
    {
      name: "Ms. Priya Reddy",
      position: "Dean of Student Affairs",
      background:
        "Child Psychology specialist with focus on holistic student development.",
      image: "./Who/WhoweareImg6.jpeg",
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
            Who We Are
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            OB365 School School is more than an educational institution – we are
            architects of the future, nurturing young minds to become confident,
            compassionate, and capable global citizens.
          </p>
        </div>
      </section>

      {/* Horizontal Scroll Principles */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Our Founding Principles
          </h2>

          <div className="overflow-x-auto">
            <div
              className="flex space-x-8 pb-6"
              style={{ width: "max-content" }}
            >
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-8 w-80 hover:neon-glow transition-all duration-300"
                >
                  <div className="text-6xl mb-6 text-center">
                    {principle.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-4 text-center"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    className="text-center"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Governors */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Board of Governors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300 rotate-3d"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {member.name}
                </h3>
                <p className="text-blue-500 font-semibold mb-4">
                  {member.position}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {member.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300 rotate-3d"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {leader.name}
                </h3>
                <p className="text-purple-500 font-semibold mb-4">
                  {leader.position}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {leader.background}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="glass-effect rounded-2xl p-12 hover:neon-glow transition-all duration-300">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-blue-500 mr-4" />
                <h2
                  className="text-3xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Our Mission
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                To provide world-class education that combines academic
                excellence with character development, preparing students to
                become responsible global citizens who contribute positively to
                society through innovation, leadership, and service.
              </p>
            </div>

            {/* Vision */}
            <div className="glass-effect rounded-2xl p-12 hover:neon-glow transition-all duration-300">
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-purple-500 mr-4" />
                <h2
                  className="text-3xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Our Vision
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                To be the leading international school that shapes future
                leaders equipped with 21st-century skills, cultural competence,
                and ethical values necessary to thrive in an interconnected and
                rapidly evolving world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Chart */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Our Global Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: "Alumni Worldwide", icon: "🎓" },
              { value: "98%", label: "University Acceptance", icon: "📊" },
              { value: "50+", label: "Countries Represented", icon: "🌎" },
              { value: "25+", label: "Years of Excellence", icon: "⭐" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Journey Timeline */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Our Journey
          </h2>

          <div className="space-y-8">
            {[
              {
                year: "1999",
                title: "Foundation",
                description:
                  "OB365 School School established with a vision to transform education",
              },
              {
                year: "2005",
                title: "CBSE Affiliation",
                description:
                  "Received CBSE affiliation and expanded to secondary education",
              },
              {
                year: "2010",
                title: "Technology Integration",
                description:
                  "Pioneered digital classrooms and e-learning platforms",
              },
              {
                year: "2015",
                title: "International Recognition",
                description:
                  "Awarded Best International School by Education Excellence Awards",
              },
              {
                year: "2020",
                title: "Virtual Learning",
                description:
                  "Successfully transitioned to hybrid learning model during pandemic",
              },
              {
                year: "2025",
                title: "AI-Powered Education",
                description:
                  "Leading the future with AI-integrated personalized learning",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="flex-1 glass-effect rounded-xl p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {milestone.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
