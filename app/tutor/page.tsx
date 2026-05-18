import React from 'react';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import Breadcrumb from '@/components/layout/Breadcrumb';
import TutorSidebar from '@/components/tutor/TutorSidebar';
import TutorListSection from '@/components/tutor/TutorListSection';
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
      <Breadcrumb title="Premium Tutors" pageName="Premium Tutors" />
      
      {/* ============================== Tutor Section Start ============================== */}
      <section className="course-list-view py-120 background-img bg-img" data-background-image="assets/images/bg/gradient-bg.png">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <TutorSidebar />
            </div>
            <div className="col-lg-8">
              <TutorListSection />
            </div>
          </div>
        </div>
      </section>
      {/* ============================== Tutor Section End ============================== */}

      <Certificate />
      <Footer />
    </>
  );
}
