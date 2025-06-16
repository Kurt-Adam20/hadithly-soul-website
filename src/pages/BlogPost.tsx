
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { id } = useParams();

  // Sample blog posts data (same as in Blog.tsx)
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Daily Islamic Reminders in Modern Life",
      content: `In our fast-paced world, it's easy to lose connection with our spiritual side. The constant demands of work, family, and social obligations can leave little time for reflection and remembrance of Allah.

Daily Islamic reminders serve as spiritual anchors that help us maintain our connection with our faith throughout the day. These reminders don't need to be lengthy or complex – sometimes a simple verse from the Quran or a beautiful hadith can transform our entire mindset.

The Prophet Muhammad (peace be upon him) said: "Remember often the destroyer of pleasures - death." This reminder helps us put our daily struggles into perspective and remember what truly matters.

When we incorporate Islamic reminders into our daily routine, we create moments of mindfulness that help us stay grounded in our faith. Whether it's through prayer notifications, reading daily supplications, or reflecting on the 99 names of Allah, these practices enrich our spiritual lives.

Technology can be a powerful ally in this journey. Apps like Hadithly make it easy to receive authentic Islamic reminders throughout the day, helping us stay connected to our faith even during our busiest moments.`,
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
      content: `The authenticity of hadiths is a fundamental aspect of Islamic scholarship that every Muslim should understand. In an age where information spreads rapidly, it's crucial to know how to distinguish between authentic and weak hadiths.

The science of hadith authentication (Ilm al-Hadith) developed over centuries by Islamic scholars provides us with rigorous methods to verify the authenticity of prophetic traditions. This process involves examining both the chain of narrators (isnad) and the content of the hadith (matn).

Scholars classify hadiths into various categories: Sahih (authentic), Hasan (good), Da'if (weak), and Mawdu' (fabricated). Understanding these classifications helps us approach hadith literature with the proper respect and caution it deserves.

The six major hadith collections (Kutub al-Sittah) - Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawood, Jami' at-Tirmidhi, Sunan an-Nasa'i, and Sunan Ibn Majah - represent the gold standard of hadith preservation.

In today's digital age, it's easier than ever to access hadith collections, but it's equally important to rely on authenticated sources and scholarly commentary to understand their proper context and application.`,
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
      content: `Maintaining consistent prayer habits in our modern, distraction-filled world can be challenging. However, digital tools can serve as powerful allies in helping us establish and maintain our connection with Allah through regular prayer.

The key to building consistent prayer habits lies in creating systems that work with our lifestyle, not against it. Prayer time apps, for instance, can provide accurate prayer times based on your location and send gentle reminders throughout the day.

Beyond just notifications, digital tools can help us prepare mentally and spiritually for prayer. Apps that provide pre-prayer supplications, help us find the qibla direction, and offer post-prayer dhikr create a complete prayer experience.

The Prophet Muhammad (peace be upon him) emphasized the importance of consistency in worship, saying: "The most beloved of deeds to Allah are those that are most consistent, even if they are small."

Creating prayer habits that stick requires starting small and gradually building up. Use technology to track your progress, set achievable goals, and celebrate small victories along your spiritual journey.

Remember, the goal isn't perfection but consistency and sincere effort in drawing closer to Allah through regular prayer and remembrance.`,
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
      content: `Gratitude, or "Shukr" in Arabic, is not just a recommended practice in Islam – it's a fundamental aspect of faith that profoundly impacts our psychological well-being. Modern psychology has confirmed what Islamic teachings have emphasized for over 1400 years: gratitude is essential for mental health and spiritual growth.

The Quran repeatedly emphasizes the importance of gratitude: "And whoever is grateful, he is only grateful for the benefit of his own soul" (31:12). This verse highlights the personal benefits we derive from practicing gratitude.

Research in positive psychology shows that grateful people experience higher levels of positive emotions, life satisfaction, and overall well-being. They also tend to be more resilient in the face of trauma and stress – qualities that align perfectly with Islamic teachings about trusting in Allah's wisdom.

The Islamic practice of saying "Alhamdulillahi Rabbil Alameen" (All praise is due to Allah, Lord of all the worlds) is more than just a ritual – it's a powerful tool for rewiring our brains toward positivity and contentment.

Incorporating daily gratitude practices, such as keeping a gratitude journal or regularly reciting prayers of thanks, can significantly improve our mental health while strengthening our relationship with Allah.

The Prophet Muhammad (peace be upon him) said: "He who does not thank people, does not thank Allah." This teaches us that gratitude extends beyond our relationship with Allah to include appreciation for the people in our lives.`,
      excerpt: "Discover the profound connection between Islamic teachings on gratitude and modern psychological research. Learn practical ways to cultivate thankfulness in your daily life.",
      author: "Dr. Fatima Al-Zahra",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Psychology",
      image: "/placeholder.svg"
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || "1"));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#2D3A4A] text-white">
        <Header />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button className="bg-[#F4ECD8] text-[#2D3A4A] hover:bg-[#F4ECD8]/90">
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2D3A4A] text-white">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[#F4ECD8] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <Badge className="bg-[#F4ECD8]/10 text-[#F4ECD8] border-[#F4ECD8]/20 mb-4">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-[#F4ECD8]/5 rounded-lg mb-8"></div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="border-t border-[#F4ECD8]/10 pt-8 mt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Written by</p>
                <p className="text-[#F4ECD8] font-semibold">{post.author}</p>
              </div>
              
              <Link to="/blog">
                <Button className="bg-[#F4ECD8]/10 text-[#F4ECD8] hover:bg-[#F4ECD8]/20 border border-[#F4ECD8]/20 hover:border-[#F4ECD8]/40">
                  More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
