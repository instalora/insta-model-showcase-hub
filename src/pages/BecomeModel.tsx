import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const BecomeModel = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    instagram: "",
    about: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.epictwin.co/models/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          account: formData.instagram,
          about: formData.about,
        }),
      });

      if (response.status === 400) {
        let message = "Please check your details and try again.";

        try {
          const errorBody = await response.json();
          if (errorBody?.detail) {
            message = errorBody.detail;
          }
        } catch (parseError) {
          console.error("Failed to parse error response", parseError);
        }

        toast({
          title: "Submission failed",
          description: message,
          variant: "destructive",
        });
        return;
      }

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      setFormData({
        fullName: "",
        email: "",
        instagram: "",
        about: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to submit your application. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-10 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Form */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Become an AI Model
            </h1>
            <p className="text-muted-foreground mb-8">
              Join our platform and let brands create stunning AI-generated content with your likeness.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Instagram Handle (Account)</label>
                <Input
                  placeholder="Instagram username for your account (e.g. yourusername)"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about yourself</label>
                <Textarea
                  placeholder="Share your modeling experience, interests, and why you want to become an AI model..."
                  rows={4}
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#E456F4] to-[#A855F7] hover:opacity-90 text-white py-6 text-lg rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>

          {/* Right - Benefits */}
          <div className="bg-muted/30 rounded-3xl p-8 md:sticky md:top-24">
            <h2 className="text-xl font-semibold mb-6">Why become an AI model?</h2>
            
            <div className="space-y-4">
              {[
                "Earn passive income from your AI likeness",
                "Work with top global brands",
                "Full control over your digital identity",
                "No physical shoots required",
                "Expand your reach worldwide",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#E456F4] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" 
                  alt="AI model example"
                  className="rounded-xl w-full aspect-[3/4] object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" 
                  alt="AI model example"
                  className="rounded-xl w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BecomeModel;
