
import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate subscription
    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our weekly health digest in your inbox.",
    });
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <section className="py-12 bg-health-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Check className="h-12 w-12 text-green-300" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Thank You for Subscribing!</h2>
          <p className="opacity-90">
            You'll receive the latest health articles and news directly in your inbox.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-health-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
        <h2 className="text-2xl font-bold mb-4">Stay Updated on Medical News</h2>
        <p className="mb-8 opacity-90 max-w-2xl mx-auto">
          Subscribe to our newsletter and get weekly digest of the best health articles, 
          latest medical research, and expert health tips delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input 
            type="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            required
          />
          <Button 
            type="submit"
            className="bg-white text-health-600 hover:bg-gray-100"
          >
            Subscribe
          </Button>
        </form>
        <p className="text-sm opacity-75 mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};
