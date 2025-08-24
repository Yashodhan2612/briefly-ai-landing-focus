import { Button } from "@/components/ui/button";
import slackMockup from "@/assets/slack-mockup.jpg";
import PlatformLogos from "@/components/PlatformLogos";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Platform integration showcase */}
          <div className="mb-16 lg:mb-20">
            <p className="text-center text-sm lg:text-base text-muted-foreground mb-8 animate-fade-in-up">
              Connect your entire workflow
            </p>
            <PlatformLogos />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
                Work updates.{" "}
                <span className="text-gradient">Clear.</span>{" "}
                <span className="text-gradient">Fast.</span>{" "}
                In Slack.
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up animate-delay-100">
                Automate status updates, surface blockers, and keep everyone aligned without wasting hours in meetings.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-6 animate-fade-in-up animate-delay-200"
                onClick={scrollToWaitlist}
              >
                Join the Private Beta
              </Button>
            </div>
            
            {/* Right mockup */}
            <div className="relative lg:block hidden">
              <div className="relative animate-float">
                <img 
                  src={slackMockup} 
                  alt="Slack digest mockup showing automated status updates" 
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-large"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;