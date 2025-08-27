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

      {/* Connection line 1 with stronger flowing data */}
      <div className="w-24 lg:flex-1 data-stream-line data-stream-glow">
        {/* Flowing particles */}
        <div className="particle particle--lg left-0 animate-flow-strong-ltr"></div>
        <div className="particle particle--md left-0 animate-flow-strong-ltr-delay"></div>
        <div className="particle particle--sm left-0 animate-flow-strong-ltr-delay-2"></div>
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

      {/* Connection line 2 with stronger flowing data (reverse) */}
      <div className="w-24 lg:flex-1 data-stream-line data-stream-glow">
        <div className="particle particle--lg right-0 animate-flow-strong-rtl"></div>
        <div className="particle particle--md right-0 animate-flow-strong-rtl-delay"></div>
        <div className="particle particle--sm right-0 animate-flow-strong-rtl-delay-2"></div>
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