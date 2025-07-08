
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HighlightsSection from '../components/HighlightsSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GettingStartedSection from '../components/GettingStartedSection';
import RoadmapSection from '../components/RoadmapSection';
import SocialSection from '../components/SocialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SolidBackground from '../components/SolidBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SolidBackground />
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <StatsSection />
      <TestimonialsSection />
      <GettingStartedSection />
      <RoadmapSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
