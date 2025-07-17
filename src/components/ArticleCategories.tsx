
import { Link } from "react-router-dom";
import { Heart, Brain, Utensils, Activity, Baby, Pill, Stethoscope, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Cardiology",
    icon: <Heart className="h-6 w-6" />,
    articleCount: 245,
    color: "bg-red-50 text-red-700",
    description: "Heart health and cardiovascular conditions"
  },
  {
    name: "Nutrition",
    icon: <Utensils className="h-6 w-6" />,
    articleCount: 189,
    color: "bg-green-50 text-green-700",
    description: "Diet, supplements, and healthy eating"
  },
  {
    name: "Fitness",
    icon: <Activity className="h-6 w-6" />,
    articleCount: 156,
    color: "bg-blue-50 text-blue-700",
    description: "Exercise, workouts, and physical activity"
  },
  {
    name: "Mental Health",
    icon: <Brain className="h-6 w-6" />,
    articleCount: 134,
    color: "bg-purple-50 text-purple-700",
    description: "Psychology, stress management, and wellness"
  },
  {
    name: "Pediatrics",
    icon: <Baby className="h-6 w-6" />,
    articleCount: 98,
    color: "bg-pink-50 text-pink-700",
    description: "Child health and development"
  },
  {
    name: "Pharmacy",
    icon: <Pill className="h-6 w-6" />,
    articleCount: 87,
    color: "bg-orange-50 text-orange-700",
    description: "Medications and drug interactions"
  },
  {
    name: "General Medicine",
    icon: <Stethoscope className="h-6 w-6" />,
    articleCount: 167,
    color: "bg-teal-50 text-teal-700",
    description: "Primary care and general health topics"
  },
  {
    name: "Vision Care",
    icon: <Eye className="h-6 w-6" />,
    articleCount: 56,
    color: "bg-indigo-50 text-indigo-700",
    description: "Eye health and vision problems"
  }
];

export const ArticleCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <Link key={index} to={`/articles/category/${category.name.toLowerCase()}`}>
          <Card className="hover:shadow-md transition-shadow p-6 h-full">
            <div className={`${category.color} p-3 rounded-lg inline-block mb-4`}>
              {category.icon}
            </div>
            <h3 className="font-semibold mb-2">{category.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{category.description}</p>
            <p className="text-xs text-gray-500">{category.articleCount} articles</p>
          </Card>
        </Link>
      ))}
    </div>
  );
};
