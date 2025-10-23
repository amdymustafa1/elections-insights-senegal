import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import StatsOverview from './StatsOverview';
import FeaturesGrid from './FeaturesGrid';
import InteractiveMap from './InteractiveMap';
import DashboardPreview from './DashboardPreview';
import SurveyModule from './SurveyModule';
import PredictiveAnalytics from './PredictiveAnalytics';
import TrustBadges from './TrustBadges';
import PricingSection from './PricingSection';
import CTASection from './CTASection';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <StatsOverview />
        <FeaturesGrid />
        <InteractiveMap />
        <DashboardPreview />
        <SurveyModule />
        <PredictiveAnalytics />
        <TrustBadges />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
