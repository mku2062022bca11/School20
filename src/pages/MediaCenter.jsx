import React, { useState } from "react";
import {
  Play,
  Image,
  FileText,
  Newspaper,
  Filter,
  Calendar,
  Download,
  ExternalLink,
  Mic,
} from "lucide-react";

const MediaCenter = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const mediaContent = {
    photos: [
      {
        id: 1,
        title: "Annual Sports Day 2024",
        category: "sports",
        year: "2024",
        department: "athletics",
        image: "./Media/MediaImg1.jpeg",
        description: "Exciting moments from our annual sports competition",
      },
      {
        id: 2,
        title: "Science Fair Winners",
        category: "academic",
        year: "2024",
        department: "science",
        image: "./Media/MediaImg2.jpeg",
        description: "Young innovators showcase their scientific projects",
      },
      {
        id: 3,
        title: "Cultural Festival Performances",
        category: "cultural",
        year: "2024",
        department: "arts",
        image: "./Media/MediaImg3.jpeg",
        description: "Vibrant cultural celebrations and artistic performances",
      },
      {
        id: 4,
        title: "Graduation Ceremony",
        category: "events",
        year: "2024",
        department: "administration",
        image: "./Media/MediaImg4.jpeg",
        description: "Celebrating our graduating class achievements",
      },
      {
        id: 5,
        title: "STEM Lab Innovation",
        category: "academic",
        year: "2024",
        department: "technology",
        image: "./Media/MediaImg5.jpeg",
        description: "Students exploring cutting-edge technology",
      },
      {
        id: 6,
        title: "Environmental Awareness Week",
        category: "social",
        year: "2024",
        department: "environment",
        image: "./Media/MediaImg6.jpeg",
        description: "Community initiatives for environmental conservation",
      },
    ],
    videos: [
      {
        id: 1,
        title: "OB365 School School - Virtual Tour 2024",
        duration: "8:45",
        views: "15.2K",
        category: "tour",
        thumbnail: "./Media/MediaImg7.jpeg",
        description:
          "Complete virtual tour of our state-of-the-art campus facilities",
      },
      {
        id: 2,
        title: "Student Success Stories - Alumni Testimonials",
        duration: "12:30",
        views: "8.7K",
        category: "testimonials",
        thumbnail: "./Media/MediaImg8.jpeg",
        description:
          "Inspiring stories from our successful alumni around the world",
      },
      {
        id: 3,
        title: "Innovation in Education - AI & Technology",
        duration: "15:20",
        views: "22.1K",
        category: "technology",
        thumbnail: "./Media/MediaImg9.jpeg",
        description:
          "How we integrate cutting-edge technology in our curriculum",
      },
      {
        id: 4,
        title: "Annual Cultural Festival Highlights",
        duration: "6:15",
        views: "11.5K",
        category: "events",
        thumbnail: "./Media/MediaImg10.jpeg",
        description: "Best moments from our multicultural celebration",
      },
    ],
    articles: [
      {
        id: 1,
        title: "EverRise Students Win International Robotics Championship",
        author: "Dr. Sarah Johnson",
        date: "2024-03-15",
        category: "achievements",
        excerpt:
          "Our robotics team secured first place at the International Youth Robotics Championship, showcasing exceptional engineering skills and innovation.",
        readTime: "3 min read",
      },
      {
        id: 2,
        title: "New AI-Powered Learning Platform Launches",
        author: "Tech Team",
        date: "2024-02-28",
        category: "technology",
        excerpt:
          "Revolutionary personalized learning platform uses artificial intelligence to adapt to each student's learning pace and style.",
        readTime: "5 min read",
      },
      {
        id: 3,
        title: "Sustainability Initiative: Zero Waste Campus",
        author: "Environmental Club",
        date: "2024-02-10",
        category: "environment",
        excerpt:
          "Our comprehensive sustainability program aims to achieve zero waste status by 2025 through innovative recycling and reduction strategies.",
        readTime: "4 min read",
      },
      {
        id: 4,
        title: "Global Exchange Program Expands to 15 Countries",
        author: "International Office",
        date: "2024-01-20",
        category: "international",
        excerpt:
          "Students now have opportunities to study abroad in 15 countries, fostering global citizenship and cultural understanding.",
        readTime: "6 min read",
      },
    ],
    press: [
      {
        id: 1,
        title:
          'OB365 School Named "School of the Year" by Education Excellence Awards',
        publication: "Education Today Magazine",
        date: "2024-03-20",
        category: "awards",
        excerpt:
          "Recognition for outstanding academic achievement, innovative teaching methods, and student development programs.",
        link: "#",
      },
      {
        id: 2,
        title: "Revolutionary STEM Program Attracts International Attention",
        publication: "Tech Education Weekly",
        date: "2024-03-05",
        category: "featured",
        excerpt:
          "Our integrated STEM curriculum featuring AI, robotics, and sustainable technology draws praise from education experts worldwide.",
        link: "#",
      },
      {
        id: 3,
        title:
          "Student-Led Environmental Project Featured in National Geographic",
        publication: "National Geographic Kids",
        date: "2024-02-15",
        category: "featured",
        excerpt:
          "Innovative water conservation project developed by Grade 10 students showcased as a model for youth environmental action.",
        link: "#",
      },
    ],
  };

  const podcasts = [
    {
      id: 1,
      title: "From Classroom to Global Stage",
      speaker: "Arya Sharma, Head Girl",
      duration: "15:30",
      category: "student-voice",
      description:
        "Journey from shy newcomer to confident school leader, sharing tips for personal growth and leadership.",
      plays: "2.3K",
    },
    {
      id: 2,
      title: "Innovation in Education",
      speaker: "Dr. Michael Chen, Principal",
      duration: "22:45",
      category: "leadership",
      description:
        "Insights into modern education trends and how EverRise adapts to prepare students for the future.",
      plays: "4.1K",
    },
    {
      id: 3,
      title: "Balancing Academics and Passion",
      speaker: "Rohan Gupta, Robotics Champion",
      duration: "18:20",
      category: "student-voice",
      description:
        "How to pursue your passion while maintaining academic excellence, featuring championship experiences.",
      plays: "3.2K",
    },
  ];

  const filterOptions = {
    photos: ["all", "sports", "academic", "cultural", "events", "social"],
    videos: ["all", "tour", "testimonials", "technology", "events"],
    articles: [
      "all",
      "achievements",
      "technology",
      "environment",
      "international",
    ],
    press: ["all", "awards", "featured"],
  };

  const filteredContent =
    selectedFilter === "all"
      ? mediaContent[activeTab]
      : mediaContent[activeTab].filter(
          (item) => item.category === selectedFilter
        );

  return (
    <div className="min-h-screen pt-20 lg:pt-8">
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Media Center
          </h1>
          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore our rich collection of photos, videos, articles, and press
            coverage that capture the vibrant life and achievements of our
            school community.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section
        className="py-8"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                key: "photos",
                label: "Photos",
                icon: <Image className="w-5 h-5" />,
              },
              {
                key: "videos",
                label: "Videos",
                icon: <Play className="w-5 h-5" />,
              },
              {
                key: "articles",
                label: "Articles",
                icon: <FileText className="w-5 h-5" />,
              },
              {
                key: "press",
                label: "Press",
                icon: <Newspaper className="w-5 h-5" />,
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setSelectedFilter("all");
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white neon-glow"
                    : "glass-effect text-blue-500 hover:neon-glow"
                }`}
              >
                {tab.icon}
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section
        className="py-6"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-4">
            <Filter className="w-5 h-5 text-blue-500" />
            <div className="flex flex-wrap gap-2">
              {filterOptions[activeTab].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 capitalize ${
                    selectedFilter === filter
                      ? "bg-blue-500 text-white neon-glow"
                      : "glass-effect text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Display */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6">
          {/* Photos Grid */}
          {activeTab === "photos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map((photo) => (
                <div
                  key={photo.id}
                  className="glass-effect rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs">
                        {photo.category}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {photo.year}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {photo.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Grid */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredContent.map((video) => (
                <div
                  key={video.id}
                  className="glass-effect rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 neon-glow">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-xs">
                        {video.category}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {video.views} views
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {video.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Articles List */}
          {activeTab === "articles" && (
            <div className="space-y-6">
              {filteredContent.map((article) => (
                <div
                  key={article.id}
                  className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                        {article.category}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {article.readTime}
                      </span>
                    </div>
                    <div
                      className="flex items-center space-x-2 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    By {article.author}
                  </p>
                  <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {article.excerpt}
                  </p>

                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Press Coverage */}
          {activeTab === "press" && (
            <div className="space-y-6">
              {filteredContent.map((press) => (
                <div
                  key={press.id}
                  className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                      {press.category}
                    </span>
                    <div
                      className="flex items-center space-x-2 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(press.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {press.title}
                  </h3>
                  <p className="text-sm font-semibold mb-4 text-blue-500">
                    {press.publication}
                  </p>
                  <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {press.excerpt}
                  </p>

                  <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                    <span>Read Full Article</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Voices from Campus - Podcasts */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Voices from Campus
          </h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Listen to authentic stories and insights from our students,
            teachers, and leaders sharing their experiences and perspectives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="glass-effect rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mic className="w-8 h-8 text-white" />
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {podcast.title}
                </h3>
                <p className="text-blue-500 font-semibold mb-4">
                  {podcast.speaker}
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {podcast.description}
                </p>

                <div
                  className="flex items-center justify-between text-sm mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span>{podcast.duration}</span>
                  <span>{podcast.plays} plays</span>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Listen Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Magazine */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            EverRise Digital Magazine
          </h2>
          <p
            className="text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Explore our interactive digital magazine featuring student
            achievements, academic insights, and community highlights in an
            engaging flipbook format.
          </p>

          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl relative overflow-hidden mb-8">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-4 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-white">
                  <FileText className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Latest Issue - Spring 2024
                  </h3>
                  <p className="opacity-90">
                    64 pages of inspiring stories and achievements
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4
                  className="font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Featured Stories
                </h4>
                <ul
                  className="text-sm space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>• International Awards</li>
                  <li>• STEM Innovation</li>
                  <li>• Alumni Success</li>
                </ul>
              </div>
              <div className="text-center">
                <h4
                  className="font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Student Contributions
                </h4>
                <ul
                  className="text-sm space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>• Creative Writing</li>
                  <li>• Photography</li>
                  <li>• Art Gallery</li>
                </ul>
              </div>
              <div className="text-center">
                <h4
                  className="font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  School Updates
                </h4>
                <ul
                  className="text-sm space-y-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <li>• New Facilities</li>
                  <li>• Program Updates</li>
                  <li>• Community Events</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Read Digital Magazine</span>
              </button>
              <button className="px-8 py-4 glass-effect text-blue-500 rounded-full hover:neon-glow transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaCenter;
