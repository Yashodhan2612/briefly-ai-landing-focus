import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
type WaitlistInsert = Database["public"]["Tables"]["waitlist_submissions"]["Insert"];

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  //calls backend api to submit the form responses
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("http://127.0.0.1:8080/waitlist-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Welcome to the waitlist! 🎉",
          description: "We'll be in touch soon with early access details.",
        });
        setFormData({ id: "", name: "", email: "", phone: "", company: "" });
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (err: any) {
      toast({
        title: "Could not join waitlist",
        description: err?.message ?? "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  //Handles submissions to the waitlist

  /*const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload: WaitlistInsert = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        // created_at is usually defaulted by DB, omit unless you need to set it
      };
  
      const { data, error } = await (supabase as any)
        .from("waitlist_submissions")
        .insert([payload])
        .select();
  
      if (error) throw error;
    
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll be in touch soon with early access details.",
      });
      setFormData({ id: "", name: "", email: "", phone: "", company: "" });
    } catch (err: any) {
      toast({
        title: "Could not join waitlist",
        description: err?.message ?? "Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }; */ //Commented out this code which handles the frontend submission to waitlist form directly (Less-secure way)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="waitlist" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Get early access and start{" "}
            <span className="text-gradient">saving hours</span>{" "}
            every week.
          </h2>
          
          <Card className="mt-12 shadow-medium animate-fade-in-up animate-delay-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="transition-smooth focus:shadow-subtle"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="transition-smooth focus:shadow-subtle"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="transition-smooth focus:shadow-subtle"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your company (optional)"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className="transition-smooth focus:shadow-subtle"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-smooth text-lg py-6"
                >
                  {isSubmitting ? "Joining..." : "Join the Private Beta"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;