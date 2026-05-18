import React from 'react';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Preloader from '@/components/layout/Preloader';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Banner from '@/components/home/Banner';
import BrandSlider from '@/components/home/BrandSlider';
import Features from '@/components/home/Features';
import ExploreCourse from '@/components/home/ExploreCourse';
import About from '@/components/home/About';
import ChooseUs from '@/components/home/ChooseUs';
import Counter from '@/components/home/Counter';
import Testimonials from '@/components/home/Testimonials';
import Blog from '@/components/home/Blog';
import Certificate from '@/components/home/Certificate';
import Footer from '@/components/home/Footer';


export const metadata = {
  title: "EduAll - LMS, Tutors, Education & Online Course Html Template",
};

export default function Page() {
  return (
    <>
      {/* <Preloader /> */}
      <div className="side-overlay"></div>
      <ProgressWrap />
      <Overlay />
      <MobileMenu />
      <Header />
      <Banner />
      <BrandSlider />
      <Features />
      <ExploreCourse />
      <About />
      <ChooseUs />
      <Counter />
      <Testimonials />
      <Blog />
      <Certificate />
      <Footer />
    </>
  );
}
