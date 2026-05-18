import React from 'react';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import TuitionJobsSection from '@/components/tuition/TuitionJobsSection';
import CertificateSection from '@/components/layout/CertificateSection';
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
      
      <Breadcrumb title="Tuition Jobs" pageName="Tuition Jobs" />
      <TuitionJobsSection />
      <CertificateSection />
      
      <Footer />
    </>
  );
}
