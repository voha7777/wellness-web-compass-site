
import { Link } from "react-router-dom";
import { Calendar, Clock, User, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  trending?: boolean;
  featured?: boolean;
}

export const FeaturedArticle = ({
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
  slug,
  trending = false,
  featured = false
}: FeaturedArticleProps) => {
  return (
    <Link to={`/articles/${category.toLowerCase()}/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
          />
          {trending && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-red-500 text-white flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Trending
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-3">{category}</Badge>
          <h3 className={`font-bold mb-3 text-health-700 hover:text-health-800 transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {date}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
