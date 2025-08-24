import jiraIcon from "@/assets/jira-icon.png";
import slackIcon from "@/assets/slack-icon.png";
import confluenceIcon from "@/assets/confluence-icon.png";

const PlatformLogos = () => {
  return (
    <div className="flex items-center justify-center space-x-8 lg:space-x-12 animate-fade-in-up animate-delay-300">
      {/* JIRA */}
      <div className="relative">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl shadow-medium bg-white/80 backdrop-blur-sm flex items-center justify-center transition-smooth hover:shadow-large hover:scale-105">
          <img 
            src={jiraIcon} 
            alt="JIRA project management integration" 
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
        </div>
      </div>

      {/* Connection line 1 with flowing data */}
      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-primary/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/60"></div>
        {/* Flowing data bits */}
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-primary rounded-full animate-flow-to-center transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-primary/70 rounded-full animate-flow-to-center-delay transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-primary/50 rounded-full animate-flow-to-center-delay-2 transform -translate-y-1/2"></div>
      </div>

      {/* Slack - Central Hub with data pulse animation */}
      <div className="relative">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl shadow-medium bg-white/80 backdrop-blur-sm flex items-center justify-center transition-smooth hover:shadow-large hover:scale-105 animate-data-pulse">
          <img 
            src={slackIcon} 
            alt="Slack messaging integration" 
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
        </div>
        {/* Central hub indicator with enhanced glow */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center animate-hub-glow">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
        {/* Data arrival effect */}
        <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-data-arrival"></div>
      </div>

      {/* Connection line 2 with flowing data */}
      <div className="flex-1 h-0.5 bg-gradient-to-l from-primary/30 to-primary/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-primary/60"></div>
        {/* Flowing data bits (right to left) */}
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-primary rounded-full animate-flow-to-center-reverse transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-primary/70 rounded-full animate-flow-to-center-reverse-delay transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-1 h-1 bg-primary/50 rounded-full animate-flow-to-center-reverse-delay-2 transform -translate-y-1/2"></div>
      </div>

      {/* Confluence */}
      <div className="relative">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl shadow-medium bg-white/80 backdrop-blur-sm flex items-center justify-center transition-smooth hover:shadow-large hover:scale-105">
          <img 
            src={confluenceIcon} 
            alt="Confluence documentation integration" 
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformLogos;