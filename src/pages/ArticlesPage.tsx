
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Heart, Utensils, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ArticlesPage = () => {
  const featuredArticles = [
    {
      title: "10 способов улучшить здоровье сердца",
      excerpt: "Простые изменения в образе жизни, которые могут значительно снизить риск сердечно-сосудистых заболеваний",
      category: "Кардиология",
      author: "Д-р Иванова А.С.",
      date: "15 января 2024",
      readTime: "7 мин",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "improve-heart-health",
      trending: true
    },
    {
      title: "Сахарный диабет: современные методы лечения",
      excerpt: "Обзор новейших подходов к лечению диабета 2 типа, включая инновационные препараты и технологии",
      category: "Эндокринология",
      author: "Д-р Петров В.М.",
      date: "12 января 2024",
      readTime: "12 мин",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "diabetes-treatment-2024",
      trending: false
    },
    {
      title: "Влияние питания на психическое здоровье",
      excerpt: "Научные исследования о связи между рационом питания и состоянием нервной системы",
      category: "Психиатрия",
      author: "Д-р Сидорова М.П.",
      date: "10 января 2024",
      readTime: "9 мин",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "nutrition-mental-health",
      trending: true
    }
  ];

  const categories = [
    {
      name: "Кардиология",
      icon: <Heart className="h-6 w-6" />,
      articleCount: 245,
      color: "bg-red-50 text-red-700"
    },
    {
      name: "Питание",
      icon: <Utensils className="h-6 w-6" />,
      articleCount: 189,
      color: "bg-green-50 text-green-700"
    },
    {
      name: "Фитнес",
      icon: <Activity className="h-6 w-6" />,
      articleCount: 156,
      color: "bg-blue-50 text-blue-700"
    }
  ];

  const latestNews = [
    {
      title: "ВОЗ обновила рекомендации по вакцинации против гриппа",
      date: "16 января 2024",
      category: "Новости медицины"
    },
    {
      title: "Новое исследование о пользе средиземноморской диеты",
      date: "15 января 2024",
      category: "Исследования"
    },
    {
      title: "Breakthrough в лечении болезни Альцгеймера",
      date: "14 января 2024",
      category: "Неврология"
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
              <h1 className="text-4xl font-bold mb-6">Статьи о здоровье</h1>
              <p className="text-xl opacity-90">
                Актуальная медицинская информация от ведущих специалистов
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Рекомендуемые статьи</h2>
              <Button variant="outline" asChild>
                <Link to="/articles/featured">Все рекомендуемые</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Featured Article */}
              <div className="lg:col-span-2">
                <Link to={`/articles/${featuredArticles[0].category.toLowerCase()}/${featuredArticles[0].slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={featuredArticles[0].image} 
                        alt={featuredArticles[0].title}
                        className="w-full h-64 object-cover"
                      />
                      {featuredArticles[0].trending && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-500 text-white flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            Популярное
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">{featuredArticles[0].category}</Badge>
                      <h3 className="text-xl font-bold mb-3 text-health-700 hover:text-health-800 transition-colors">
                        {featuredArticles[0].title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{featuredArticles[0].excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {featuredArticles[0].author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {featuredArticles[0].date}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredArticles[0].readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              {/* Secondary Articles */}
              <div className="space-y-6">
                {featuredArticles.slice(1).map((article, index) => (
                  <Link key={index} to={`/articles/${article.category.toLowerCase()}/${article.slug}`}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-24 h-24 object-cover flex-shrink-0"
                        />
                        <CardContent className="p-4 flex-grow">
                          <Badge variant="outline" className="text-xs mb-2">{article.category}</Badge>
                          <h4 className="font-semibold text-sm mb-2 text-health-700 line-clamp-2">
                            {article.title}
                          </h4>
                          <div className="text-xs text-gray-500 flex items-center gap-2">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories and Latest News */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Categories */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Категории статей</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {categories.map((category, index) => (
                    <Link key={index} to={`/articles/category/${category.name.toLowerCase()}`}>
                      <Card className="hover:shadow-md transition-shadow text-center p-6">
                        <div className={`${category.color} p-3 rounded-lg inline-block mb-4`}>
                          {category.icon}
                        </div>
                        <h3 className="font-semibold mb-2">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.articleCount} статей</p>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button asChild variant="outline">
                    <Link to="/articles/topics">Все категории A-Z</Link>
                  </Button>
                </div>
              </div>

              {/* Latest News */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Последние новости</h2>
                <Card>
                  <CardContent className="p-0">
                    {latestNews.map((news, index) => (
                      <div key={index} className={`p-4 ${index !== latestNews.length - 1 ? 'border-b' : ''}`}>
                        <h4 className="font-medium mb-2 text-health-700 hover:text-health-800 cursor-pointer">
                          {news.title}
                        </h4>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{news.category}</span>
                          <span>{news.date}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/articles/news">Все новости</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-health-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Будьте в курсе новостей медицины</h2>
            <p className="mb-8 opacity-90">
              Подпишитесь на нашу рассылку и получайте еженедельный дайджест лучших статей
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-health-600 hover:bg-gray-100">
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlesPage;
