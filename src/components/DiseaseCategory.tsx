
import { Link } from "react-router-dom";
import { ChevronRight, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DiseaseCategoryProps {
  name: string;
  icon: React.ReactNode;
  count: number;
  color: string;
  diseases: string[];
  description: string;
  slug: string;
}

export const DiseaseCategory = ({
  name,
  icon,
  count,
  color,
  diseases,
  description,
  slug
}: DiseaseCategoryProps) => {
  return (
    <Link to={`/diseases/category/${slug}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
        <CardHeader className="pb-3">
          <div className={`${color} p-3 rounded-lg inline-block w-fit mb-3`}>
            {icon}
          </div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <p className="text-sm text-gray-500">{count} conditions</p>
          <p className="text-sm text-gray-600">{description}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Common conditions:</h4>
            {diseases.slice(0, 4).map((disease, idx) => (
              <div key={idx} className="text-sm text-gray-600 flex items-center">
                <ChevronRight className="h-3 w-3 mr-1" />
                {disease}
              </div>
            ))}
            {diseases.length > 4 && (
              <div className="text-sm text-health-600 font-medium mt-2">
                +{diseases.length - 4} more conditions
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
