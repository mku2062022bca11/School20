import React, { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  Trophy,
  Heart,
  MapPin,
  Star,
  Play,
  Image,
  ArrowRight,
} from "lucide-react";

const CampusLife = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);

  const liveUpdates = [
    "Annual Sports Day preparations in full swing! 🏃‍♂️",
    "Science Fair winners announced - congratulations to all participants! 🧪",
    "Cultural Festival rehearsals begin next week 🎭",
    "Inter-house debate competition this Friday 🗣️",
    "New robotics equipment installed in STEM lab 🤖",
    "Blood donation camp organized by student council ❤️",
  ];

  const leadershipBoard = [
    {
      name: "Arya Sharma",
      position: "Head Girl",
      class: "XII-A",
      achievements: "National Science Olympiad Winner, Debate Champion",
      image: "./CampusLife/CampusImg1.jpeg",
    },
    {
      name: "Rohan Gupta",
      position: "Head Boy",
      class: "XII-B",
      achievements: "Math Olympiad Gold, Basketball Team Captain",
      image: "./CampusLife/CampusImg2.jpeg",
    },
    {
      name: "Priya Patel",
      position: "Cultural Secretary",
      class: "XI-A",
      achievements: "Classical Dance Winner, Drama Club President",
      image: "./CampusLife/CampusImg3.jpeg",
    },
    {
      name: "Arjun Singh",
      position: "Sports Captain",
      class: "XI-B",
      achievements: "State Cricket Champion, Swimming Record Holder",
      image: "./CampusLife/CampusImg4.jpeg",
    },
  ];

  const campusHotspots = [
    {
      name: "Central Library",
      description:
        "Modern library with digital resources and quiet study areas",
      features: [
        "50,000+ Books",
        "Digital Archives",
        "Study Pods",
        "Research Center",
      ],
    },
    {
      name: "Science Complex",
      description:
        "State-of-the-art laboratories for Physics, Chemistry, and Biology",
      features: [
        "Advanced Equipment",
        "Research Labs",
        "Observatory",
        "Innovation Hub",
      ],
    },
    {
      name: "Sports Arena",
      description:
        "Multi-purpose sports facility with indoor and outdoor courts",
      features: [
        "Swimming Pool",
        "Basketball Courts",
        "Football Field",
        "Gym & Fitness",
      ],
    },
    {
      name: "Arts Center",
      description: "Creative spaces for music, dance, drama, and visual arts",
      features: ["Music Studios", "Art Galleries", "Theater", "Dance Halls"],
    },
    {
      name: "Cafeteria",
      description: "Nutritious meals and snacks in a vibrant social setting",
      features: [
        "Healthy Menu",
        "Cultural Cuisine",
        "Outdoor Seating",
        "Nutrition Programs",
      ],
    },
    {
      name: "Technology Hub",
      description:
        "Computer labs, maker spaces, and digital learning environments",
      features: ["3D Printers", "Robotics Lab", "VR Systems", "Coding Studios"],
    },
  ];

  const wellnessPrograms = [
    {
      title: "Mental Health Support",
      description: "Counseling services and mental wellness programs",
      icon: "🧠",
      activities: [
        "Individual Counseling",
        "Group Therapy",
        "Stress Management",
        "Mindfulness Sessions",
      ],
    },
    {
      title: "Physical Fitness",
      description: "Comprehensive sports and fitness programs",
      icon: "💪",
      activities: [
        "Daily Sports",
        "Yoga Classes",
        "Swimming",
        "Athletic Training",
      ],
    },
    {
      title: "Nutrition & Health",
      description: "Healthy eating habits and nutrition education",
      icon: "🥗",
      activities: [
        "Balanced Meals",
        "Nutrition Education",
        "Cooking Classes",
        "Health Checkups",
      ],
    },
  ];

  const studentStories = [
    {
      name: "Aditi Kapoor",
      class: "X-A",
      story:
        "From being shy to leading the school's environmental club, EverRise helped me find my voice and passion for sustainability.",
      achievement: "Started Green Campus Initiative",
      image: "./CampusLife/CampusImg5.jpeg",
    },
    {
      name: "Vikram Reddy",
      class: "XII-B",
      story:
        "The robotics program at EverRise ignited my love for technology. Now I'm heading to MIT for Computer Science!",
      achievement: "International Robotics Championship Winner",
      image: "./CampusLife/CampusImg6.jpeg",
    },
    {
      name: "Sneha Joshi",
      class: "XI-A",
      story:
        "The diverse community at EverRise taught me about different cultures and helped me become a global citizen.",
      achievement: "Cultural Exchange Ambassador",
      image: "./CampusLife/CampusImg7.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % liveUpdates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 lg:pt-8">
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Campus Life
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Experience a vibrant community where learning extends beyond the
            classroom. Discover endless opportunities for growth, friendship,
            and memorable experiences.
          </p>
        </div>
      </section>

      {/* Live Updates Ticker */}
      <section className="py-6" style={{ backgroundColor: "var(--bg-accent)" }}>
        <div className="container mx-auto px-6">
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Live Campus Updates
              </h3>
            </div>
            <div
              className="text-lg transition-all duration-500"
              style={{ color: "var(--text-secondary)" }}
            >
              {liveUpdates[currentEvent]}
            </div>
          </div>
        </div>
      </section>

      {/* Student Leadership Board */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Student Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipBoard.map((leader, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300 rotate-3d"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {leader.name}
                </h3>
                <p className="text-blue-500 font-semibold mb-1">
                  {leader.position}
                </p>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Class {leader.class}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {leader.achievements}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 360° Virtual Campus Tour */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Virtual Campus Tour
          </h2>

          <div className="glass-effect rounded-2xl p-8 max-w-6xl mx-auto">
            <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl relative overflow-hidden mb-8">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 neon-glow">
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">360° Campus Experience</h3>
                <p className="text-sm opacity-90">
                  Explore every corner of our beautiful campus
                </p>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm">
                  4K Quality
                </div>
                <div className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm">
                  VR Ready
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {campusHotspots.map((hotspot, index) => (
                <button
                  key={index}
                  className="glass-effect rounded-lg p-4 text-center hover:neon-glow transition-all duration-300 group"
                >
                  <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h4
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {hotspot.name}
                  </h4>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Click to explore
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Zone */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Student Wellness Zone
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {wellnessPrograms.map((program, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-6xl mb-6">{program.icon}</div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {program.title}
                </h3>
                <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300">
              Learn More About Wellness Programs
            </button>
          </div>
        </div>
      </section>

      {/* Dorm Life & Student Stories */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Student Stories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {studentStories.map((student, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setSelectedStory(selectedStory === index ? null : index)
                }
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {student.name}
                    </h3>
                    <p className="text-blue-500 text-sm">
                      Class {student.class}
                    </p>
                  </div>
                </div>

                <blockquote
                  className="text-sm italic mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  "{student.story}"
                </blockquote>

                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {student.achievement}
                  </span>
                </div>

                {selectedStory === index && (
                  <div
                    className="mt-6 pt-6 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                      <span>Read Full Story</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Beyond Academics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Sports",
                activities: [
                  "Cricket",
                  "Basketball",
                  "Swimming",
                  "Tennis",
                  "Athletics",
                ],
                icon: "🏆",
                color: "from-red-500 to-orange-500",
              },
              {
                category: "Arts",
                activities: [
                  "Music",
                  "Dance",
                  "Drama",
                  "Fine Arts",
                  "Photography",
                ],
                icon: "🎨",
                color: "from-purple-500 to-pink-500",
              },
              {
                category: "STEM",
                activities: [
                  "Robotics",
                  "Coding",
                  "Science Fair",
                  "Math Olympiad",
                  "Innovation Labs",
                ],
                icon: "🔬",
                color: "from-blue-500 to-cyan-500",
              },
              {
                category: "Leadership",
                activities: [
                  "Student Council",
                  "Debate Club",
                  "Model UN",
                  "Community Service",
                  "Entrepreneurship",
                ],
                icon: "👥",
                color: "from-green-500 to-emerald-500",
              },
            ].map((club, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${club.color} flex items-center justify-center text-white text-2xl`}
                >
                  {club.icon}
                </div>
                <h3
                  className="text-xl font-bold text-center mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  {club.category}
                </h3>
                <div className="space-y-2">
                  {club.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="text-center  px-3 py-1 bg-gray-100 dark:bg-gray-400 rounded-full text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Community CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Be Part of Our Story
          </h2>
          <p
            className="text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Ready to create your own memorable experiences? Join our vibrant
            community and discover your potential in an environment that
            celebrates every achievement.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300">
              Schedule Campus Visit
            </button>
            <button className="px-8 py-4 glass-effect text-blue-500 rounded-full hover:neon-glow transition-all duration-300 flex items-center justify-center space-x-2">
              <Image className="w-5 h-5" />
              <span>View Photo Gallery</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
