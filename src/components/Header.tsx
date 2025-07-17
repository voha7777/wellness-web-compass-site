
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { 
      name: "Diseases & Conditions",
      path: "/diseases",
      subItems: [
        { name: "Common Conditions", path: "/diseases/common" },
        { name: "Symptoms", path: "/diseases/symptoms" },
        { name: "Chronic Diseases", path: "/diseases/chronic" },
        { name: "All Diseases A-Z", path: "/diseases/all" },
      ]
    },
    { 
      name: "Medications & Drugs",
      path: "/medications", 
      subItems: [
        { name: "Drug Index A-Z", path: "/medications/index" },
        { name: "Prescription Drugs", path: "/medications/prescription" },
        { name: "OTC Medicines", path: "/medications/otc" },
        { name: "Drug Interactions", path: "/medications/interactions" },
      ]
    },
    { 
      name: "Health Articles", 
      path: "/articles",
      subItems: [
        { name: "Latest Articles", path: "/articles/latest" },
        { name: "Featured Articles", path: "/articles/featured" },
        { name: "Health News", path: "/articles/news" },
        { name: "Topics A-Z", path: "/articles/topics" },
      ]
    },
    { 
      name: "Surveys & Tools",
      path: "/surveys",
      subItems: [
        { name: "Health Assessments", path: "/surveys/assessments" },
        { name: "BMI Calculator", path: "/tools/bmi-calculator" },
        { name: "Symptom Checker", path: "/tools/symptom-checker" },
        { name: "All Tools", path: "/tools" },
      ]
    },
  ];

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-30 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top Bar with Logo and Search */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-health-600 to-medGreen-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">HS</span>
            </div>
            <span className="text-xl font-bold text-gray-800">HealthSurvey</span>
          </Link>

          {/* Desktop Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search conditions, medications, articles..."
                className="pl-10 w-[300px] h-9 focus-visible:ring-health-500"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-health-100 hover:bg-health-50">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block border-t border-gray-100">
          <NavigationMenu className="mx-auto max-w-none justify-start py-1">
            <NavigationMenuList className="gap-1">
              {mainNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              to={subItem.path}
                            >
                              <div className="text-sm font-medium leading-none">{subItem.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 border-t border-gray-200">
            <div className="space-y-1">
              {/* Mobile Search */}
              <div className="pb-3 mb-3 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-10 w-full"
                  />
                </div>
              </div>
              
              {/* Mobile Menu Items */}
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-health-600 rounded-md px-3"
                  >
                    {item.name}
                  </Link>
                  <div className="pl-6 space-y-1 mt-1 mb-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-health-600 rounded-md px-3"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile Sign In */}
              <div className="pt-3 mt-3 border-t border-gray-100">
                <Button variant="outline" className="w-full justify-start mb-2 text-left">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
