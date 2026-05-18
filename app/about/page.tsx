import React from 'react';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import AboutSection from '@/components/about/AboutSection';
import ChooseUsSection from '@/components/about/ChooseUsSection';
import CounterSection from '@/components/about/CounterSection';
import TestimonialsSection from '@/components/about/TestimonialsSection';
import BrandSlider from '@/components/home/BrandSlider';
import Certificate from '@/components/home/Certificate';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: "EdullAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <>
      <Preloader />
      <div className="side-overlay"></div>
      <ProgressWrap />
      <Overlay />
      <MobileMenu />
      <Header />
      <Breadcrumb title="About Us" pageName="About Us" />
      <AboutSection />
      <ChooseUsSection />
      <CounterSection />
      <TestimonialsSection />
      <BrandSlider />
      <Certificate />
      <Footer />
    </>
  );
}
