import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Index component mounted');
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <WaitlistForm />
    </main>
  );
};

export default Index;
