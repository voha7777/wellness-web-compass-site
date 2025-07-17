
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-6 inline-block">
            <div className="w-24 h-24 rounded-full bg-health-100 flex items-center justify-center mx-auto">
              <span className="text-health-600 text-5xl font-bold">404</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            We couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
          </p>
          
          <Button asChild className="bg-health-600 hover:bg-health-700 inline-flex items-center gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
