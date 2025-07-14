
import React from 'react';
import SolidBackground from '../components/SolidBackground';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SolidBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GEE City RP - Updates & Sneak Peeks
            </h1>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-elegant">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Welcome to our updates page! Here you'll find the latest news, sneak peeks, and important announcements about GEE City RP.
                </p>
                
                <div className="mt-8 space-y-6">
                  <h2 className="text-2xl font-semibold text-foreground">Latest Updates</h2>
                  
                  <div className="bg-background/50 rounded-lg p-6 border border-border/30">
                    <p className="text-foreground leading-relaxed">
                      [Replace this text with your long update content. You can include multiple paragraphs, announcements, sneak peeks of upcoming features, server updates, events, and any other information you want to share with your community. This space is designed to accommodate lengthy content while maintaining readability and visual appeal.]
                    </p>
                  </div>
                  
                  <div className="text-sm text-muted-foreground text-center pt-4">
                    Last updated: {new Date().toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
