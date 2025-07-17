
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Activity, Heart, Brain } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-health-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block bg-health-100 text-health-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Trusted by over 1 million users worldwide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Understand Your Health <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-health-600 to-medGreen-500">
                Take Action Today
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Get personalized health insights with our expert-designed surveys. Fast, accurate, and confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-health-600 hover:bg-health-700 text-white font-medium text-lg"
                asChild
              >
                <Link to="/surveys">
                  Start a Survey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-health-200 hover:bg-health-50 text-health-700 font-medium text-lg"
                asChild
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-health-100 rounded-full p-3 mb-3">
                  <Activity className="h-6 w-6 text-health-600" />
                </div>
                <span className="text-sm text-gray-600">Physical Health</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-health-100 rounded-full p-3 mb-3">
                  <Brain className="h-6 w-6 text-health-600" />
                </div>
                <span className="text-sm text-gray-600">Mental Health</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-health-100 rounded-full p-3 mb-3">
                  <Heart className="h-6 w-6 text-health-600" />
                </div>
                <span className="text-sm text-gray-600">Wellness</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-br from-health-200/50 to-medGreen-200/50 rounded-full blur-3xl opacity-70"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                alt="Health Survey Platform" 
                className="rounded-lg shadow-xl animate-in"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 animate-in animate-pulse-gentle">
                <div className="flex items-center gap-3">
                  <div className="bg-health-100 rounded-full p-2">
                    <Activity className="h-5 w-5 text-health-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Health Score</p>
                    <p className="text-health-600 font-semibold">87/100</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-lg shadow-lg p-4 animate-in animate-pulse-gentle">
                <div className="flex items-center gap-3">
                  <div className="bg-medGreen-100 rounded-full p-2">
                    <Heart className="h-5 w-5 text-medGreen-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Completed Surveys</p>
                    <p className="text-medGreen-600 font-semibold">1.2M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
