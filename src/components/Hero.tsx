import { Button } from "@/components/ui/button";
// Removed hero image to focus on central messaging
import PlatformLogos from "@/components/PlatformLogos";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background gradients and spotlight */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient opacity-60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, hsl(250 84% 70% / 0.35), transparent)'}} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Platform integration showcase */}
          <div className="mb-16 lg:mb-20">
            <div className="mx-auto w-fit mb-6 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs lg:text-sm bg-gradient-subtle text-foreground shadow-subtle ring-1 ring-border">
                <span className="h-2 w-2 rounded-full bg-brand blink-purple" />
                <span className="opacity-80">Supercharge your workflow with</span>
                <span className="font-medium">Briefly.ai</span>
              </span>
            </div>
            <PlatformLogos />
          </div>

          {/* Centered hero content without mockup */}
          <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-tight mb-6 tracking-tight animate-fade-in-up">
                Work updates.
                {" "}
                <span className="text-gradient">Clear.</span>{" "}
                <span className="text-gradient">Fast.</span>{" "}
                In {" "}
                <span className="relative inline-block">
                  Slack
                  <span aria-hidden className="pointer-events-none absolute left-0 right-0 -bottom-2">
                    <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg" className="w-full h-5">
                      <path d="M2 12 C 20 2, 40 18, 60 8 S 100 18, 120 8 160 18, 198 8" fill="none" strokeWidth="4" strokeLinecap="round" stroke="hsl(var(--ring))"/>
                    </svg>
                  </span>
                </span>
                .
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up animate-delay-100">
                Automate status updates, surface blockers, and keep everyone aligned without wasting hours in meetings.
              </p>
              
              <div className="flex items-center justify-center gap-4 animate-fade-in-up animate-delay-200">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-6"
                  onClick={scrollToWaitlist}
                >
                  Join the Private Beta
                </Button>
                <span className="text-sm text-muted-foreground">No spam • 1-minute setup</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;