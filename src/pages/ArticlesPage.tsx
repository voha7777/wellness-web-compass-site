
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturedArticle } from "@/components/FeaturedArticle";
import { ArticleCategories } from "@/components/ArticleCategories";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const ArticlesPage = () => {
  const featuredArticles = [
    {
      title: "10 Science-Based Ways to Improve Your Heart Health",
      excerpt: "Discover evidence-based lifestyle changes that can significantly reduce your risk of cardiovascular disease and improve overall heart function.",
      category: "Cardiology",
      author: "Dr. Sarah Johnson, MD",
      date: "January 15, 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "improve-heart-health-science-based",
      trending: true
    },
    {
      title: "Type 2 Diabetes: Modern Treatment Approaches and Lifestyle Management",
      excerpt: "Comprehensive overview of the latest approaches to treating type 2 diabetes, including innovative medications, continuous glucose monitoring, and dietary strategies.",
      category: "Endocrinology",
      author: "Dr. Michael Chen, MD",
      date: "January 12, 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "diabetes-treatment-2024",
      trending: false
    },
    {
      title: "The Gut-Brain Connection: How Nutrition Affects Mental Health",
      excerpt: "Exploring the fascinating relationship between gut microbiome, nutrition, and mental health conditions including depression and anxiety.",
      category: "Psychiatry",
      author: "Dr. Emma Wilson, PhD",
      date: "January 10, 2024",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "nutrition-mental-health-connection",
      trending: true
    },
    {
      title: "Exercise as Medicine: Prescribing Physical Activity for Better Health",
      excerpt: "How healthcare providers are increasingly prescribing exercise as a treatment for various conditions, from depression to chronic pain.",
      category: "Sports Medicine",
      author: "Dr. James Rodriguez, MD",
      date: "January 8, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "exercise-as-medicine",
      trending: false
    }
  ];

  const latestNews = [
    {
      title: "WHO Updates Global Flu Vaccination Guidelines for 2024",
      date: "January 16, 2024",
      category: "Public Health",
      excerpt: "New recommendations include expanded vaccination programs and updated vaccine formulations."
    },
    {
      title: "Breakthrough Study Shows Benefits of Mediterranean Diet for Brain Health",
      date: "January 15, 2024",
      category: "Nutrition Research",
      excerpt: "Large-scale study demonstrates cognitive protection in older adults following Mediterranean eating patterns."
    },
    {
      title: "FDA Approves New Alzheimer's Treatment with Promising Results",
      date: "January 14, 2024",
      category: "Neurology",
      excerpt: "Clinical trials show significant slowing of cognitive decline in early-stage patients."
    },
    {
      title: "Telemedicine Usage Continues to Rise Post-Pandemic",
      date: "January 13, 2024",
      category: "Healthcare Technology",
      excerpt: "Remote consultations now account for 30% of all medical appointments nationwide."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Health Articles & Medical Information</h1>
              <p className="text-xl opacity-90">
                Expert-reviewed articles from leading healthcare professionals and researchers
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Articles</h2>
              <Button variant="outline" asChild>
                <Link to="/articles/featured">
                  All Featured <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Featured Article */}
              <div className="lg:col-span-2">
                <FeaturedArticle {...featuredArticles[0]} featured={true} />
              </div>

              {/* Secondary Articles */}
              <div className="space-y-6">
                {featuredArticles.slice(1, 3).map((article, index) => (
                  <div key={index} className="flex">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-24 h-24 object-cover flex-shrink-0 rounded-lg"
                    />
                    <div className="ml-4 flex-grow">
                      <Link to={`/articles/${article.category.toLowerCase()}/${article.slug}`}>
                        <h4 className="font-semibold text-sm mb-2 text-health-700 hover:text-health-800 line-clamp-2">
                          {article.title}
                        </h4>
                      </Link>
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <Button variant="outline" asChild>
                <Link to="/articles/topics">
                  All Categories <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <ArticleCategories />
          </div>
        </section>

        {/* Latest News and Recent Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Latest Medical News */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Latest Medical News</h2>
                <div className="space-y-4">
                  {latestNews.map((news, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs text-health-600 font-medium">{news.category}</span>
                          <span className="text-xs text-gray-500">{news.date}</span>
                        </div>
                        <h4 className="font-semibold mb-2 text-gray-900 hover:text-health-700 cursor-pointer">
                          {news.title}
                        </h4>
                        <p className="text-sm text-gray-600">{news.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Button asChild variant="outline" className="w-full mt-6">
                  <Link to="/articles/news">View All News</Link>
                </Button>
              </div>

              {/* Recent Articles */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                <div className="space-y-4">
                  {featuredArticles.slice(2).map((article, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs text-health-600 font-medium">{article.category}</span>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <Link to={`/articles/${article.category.toLowerCase()}/${article.slug}`}>
                          <h4 className="font-semibold mb-2 text-gray-900 hover:text-health-700">
                            {article.title}
                          </h4>
                        </Link>
                        <p className="text-sm text-gray-600 mb-2">{article.excerpt}</p>
                        <div className="text-xs text-gray-500">
                          By {article.author} • {article.date}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
