
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface HealthTopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  color?: string;
}

const HealthTopicCard = ({
  title,
  description,
  icon,
  slug,
  color = "bg-health-50 text-health-700",
}: HealthTopicCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className={`${color} p-3 rounded-lg inline-block mb-4`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="ghost"
          asChild
          className="text-health-700 hover:text-health-800 hover:bg-health-50 p-0 flex items-center gap-2 group"
        >
          <Link to={`/topics/${slug}`}>
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HealthTopicCard;
