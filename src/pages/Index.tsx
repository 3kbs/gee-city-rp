
import React from 'react';
import HeroSection from '../components/HeroSection';
import HighlightsSection from '../components/HighlightsSection';
import RoadmapSection from '../components/RoadmapSection';
import SocialSection from '../components/SocialSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <MatrixBackground />
      <HeroSection />
      <HighlightsSection />
      <RoadmapSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
