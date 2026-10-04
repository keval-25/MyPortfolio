'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import {
  fetchPublicProfile,
  fetchPublicSkills,
  fetchPublicExperiences,
  fetchPublicProjects
} from '@/lib/api';
import { ProfileInfo, Skill, Experience, Project } from '@/types';

import RealtimeColorPicker from '@/components/RealtimeColorPicker';

export default function Home() {
  const [profile, setProfile] = useState<ProfileInfo | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPortfolioData() {
      try {
        const [profData, skillData, expData, projData] = await Promise.all([
          fetchPublicProfile().catch(() => null),
          fetchPublicSkills().catch(() => []),
          fetchPublicExperiences().catch(() => []),
          fetchPublicProjects().catch(() => []),
        ]);

        if (profData) setProfile(profData);
        if (skillData.length > 0) setSkills(skillData);
        if (expData.length > 0) setExperiences(expData);
        if (projData.length > 0) setProjects(projData);
      } catch (err) {
        console.error("Error loading portfolio APIs:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolioData();
  }, []);

  return (
    <main className="min-h-screen bg-[#080a0f] text-[#f1f5f9] selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      {/* Haikei Generative Background Vector Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-blue-500/20 blur-[100px] animate-blob-1"></div>
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px] animate-blob-2"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <ContactSection />
        <Footer />
        <RealtimeColorPicker />
      </div>
    </main>
  );
}
