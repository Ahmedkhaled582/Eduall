import React from 'react';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import Header from '@/components/layout/Header';
import StudentDashboardBanner from '@/components/dashboard/StudentDashboardBanner';
import StudentSidebar from '@/components/dashboard/StudentSidebar';
import StudentWishlistSection from '@/components/dashboard/StudentWishlistSection';
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
      <StudentDashboardBanner />
      
      {/* =========== student dashbord section start ============== */}
      <section className="bg-main-25 pb-80 w-100 h-100">
        <div className="container container--lg">
          <div className="d-flex gap-24 mt--120 z-2 position-relative">
            <div className="student-overlay-sidebar"></div>
            <StudentSidebar activeItem="wishlist" />
            <StudentWishlistSection />
          </div>            
        </div>
      </section>
      {/* =========== student dashbord section end ============== */}

      <Footer />
    </>
  );
}
