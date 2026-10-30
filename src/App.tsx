/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MypCurriculumFramework } from './components/MypCurriculumFramework';
import { LearningJourney } from './components/LearningJourney';
import { SubjectGroups } from './components/SubjectGroups';
import { StreamsAndChoices } from './components/StreamsAndChoices';
import { UnderstandingEAssessment } from './components/UnderstandingEAssessment';
import { SkillsProgression } from './components/SkillsProgression';
import { FaqSection } from './components/FaqSection';
import { SourcesAndTerminology } from './components/SourcesAndTerminology';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 relative">
      {/* Top Navigation */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={scrollToJourney}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Official IB MYP Curriculum Framework (Concentric Circles, 6 Global Contexts, Concept-Driven Inquiry & Arts Infographic) */}
        <MypCurriculumFramework />

        {/* 1. MYP Learning Journey (MYP 1–5 Continuum & Objectives) */}
        <LearningJourney />

        {/* 2. MYP 1–3: Eight Subject Groups */}
        <SubjectGroups />

        {/* 3. MYP 4–5: Subject Streams and Choices */}
        <StreamsAndChoices />

        {/* 4. Understanding MYP eAssessment */}
        <UnderstandingEAssessment />

        {/* 5. Skills and Assessment Progression (ATL Matrix & Cycle) */}
        <SkillsProgression />

        {/* 6. Parent and Student FAQ */}
        <FaqSection />

        {/* Official Sources & Terminology Glossary */}
        <SourcesAndTerminology />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* GSIS MYP Academic Office Information Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
