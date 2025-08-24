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

      {/* Connection line 1 */}
      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-primary/60 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/60 animate-pulse"></div>
      </div>

      {/* Slack */}
      <div className="relative">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl shadow-medium bg-white/80 backdrop-blur-sm flex items-center justify-center transition-smooth hover:shadow-large hover:scale-105">
          <img 
            src={slackIcon} 
            alt="Slack messaging integration" 
            className="w-10 h-10 lg:w-12 lg:h-12"
          />
        </div>
        {/* Central hub indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Connection line 2 */}
      <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/60 to-primary/30 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/30 animate-pulse"></div>
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