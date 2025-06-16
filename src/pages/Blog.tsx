import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Daily Islamic Reminders in Modern Life",
      excerpt: "In our fast-paced world, it's easy to lose connection with our spiritual side. Discover how daily Islamic reminders can transform your routine and bring peace to your daily life.",
      author: "Hadithly Team",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Spirituality",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Understanding the Authenticity of Hadiths: A Guide for Modern Muslims",
      excerpt: "Learn about the rigorous process of hadith verification and why authentic sources matter in your spiritual journey. A comprehensive guide to understanding Islamic scholarship.",
      author: "Dr. Ahmad Rahman",
      date: "2025-01-10",
      readTime: "8 min read",
      category: "Islamic Knowledge",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Building Consistent Prayer Habits with Digital Tools",
      excerpt: "Technology can be a powerful ally in maintaining your spiritual practices. Explore how modern tools can help you stay consistent with your prayers and remembrance of Allah.",
      author: "Hadithly Team",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Technology & Faith",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "The Psychology of Gratitude in Islam",
      excerpt: "Discover the profound connection between Islamic teachings on gratitude and modern psychological research. Learn practical ways to cultivate thankfulness in your daily life.",
      author: "Dr. Fatima Al-Zahra",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Psychology",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Raising Islamic Awareness in the Digital Age",
      excerpt: "How can we effectively share Islamic knowledge and values through social media and digital platforms while maintaining authenticity and respect?",
      author: "Hadithly Team",
      date: "2024-12-20",
      readTime: "4 min read",
      category: "Digital Dawah",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "The Science Behind Islamic Prayer Times",
      excerpt: "Explore the astronomical and scientific principles that determine Islamic prayer times and how they align with natural human rhythms and well-being.",
      author: "Prof. Hassan Malik",
      date: "2024-12-15",
      readTime: "9 min read",
      category: "Science & Islam",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Spirituality", "Islamic Knowledge", "Technology & Faith", "Psychology", "Digital Dawah", "Science & Islam"];

  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#F4ECD8] to-white bg-clip-text text-transparent">
              Islamic Blog
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#F4ECD8]/90 font-light max-w-3xl mx-auto">
            Insights, wisdom, and guidance for modern Muslim life
          </p>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore articles about Islamic teachings, spirituality, and how to integrate faith into contemporary living.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                className="bg-[#1A2332]/60 text-gray-300 border-[#F4ECD8]/20 hover:bg-[#F4ECD8]/10 hover:text-[#F4ECD8] cursor-pointer transition-all px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-[#1A2332]/50 border-[#F4ECD8]/10 hover:bg-[#1A2332]/70 transition-all duration-300 hover:scale-105 hover:border-[#F4ECD8]/20 backdrop-blur-sm">
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-video bg-[#F4ECD8]/5 rounded-t-lg"></div>
                </Link>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-[#F4ECD8]/10 text-[#F4ECD8] border-[#F4ECD8]/20 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <CardTitle className="text-xl font-semibold text-white leading-tight hover:text-[#F4ECD8] transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button className="bg-[#F4ECD8]/10 text-[#F4ECD8] hover:bg-[#F4ECD8]/20 border border-[#F4ECD8]/20 hover:border-[#F4ECD8]/40 text-sm px-4 py-2 h-auto">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-[#1A2332]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Stay Updated with <span className="text-[#F4ECD8]">Islamic Insights</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Get the latest articles and Islamic reminders delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-[#2D3A4A] border border-[#F4ECD8]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F4ECD8]/50"
            />
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90 px-6 py-3 rounded-lg font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
