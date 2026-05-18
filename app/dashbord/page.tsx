import React from 'react';
import Link from 'next/link';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';

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
      
      <section className="dashbord bg-main-25">
    <div>
        {/* ========Dashdord Sidebar start======== */}
         <div className="px-20 py-24 max-w-288-px bg-white h-100">
              <img src="/assets/images/logo/logo.png" alt="" className="" />
              <span className="w-100 border-main-100 border mb-24 mt-24"></span>
              <div>
                <span className="text-neutral-500 fw-normal text-14 mb-8">Welcome Henry,</span>
                <ul>
                    <li className="mb-8">
                        <a href="/dashboard" className="fw-medium d-flex align-items-center gap-8 text-neutral-500 hover-bg-main-600 px-24 py-12 hover-text-white rounded-12 item-hover">
                        <span className="text-20 text-main-600 item-hover__text transition-03"><i className="ph-bold ph-house"></i></span>
                        Dashboard</a>
                    </li>
                    <li className="mb-8">
                        <a href="/dashboard" className="fw-medium d-flex align-items-center gap-8 text-neutral-500 hover-bg-main-600 px-24 py-12 hover-text-white rounded-12 item-hover">
                        <span className="text-20 text-main-600 item-hover__text transition-03"><i className="ph-bold ph-house"></i></span>
                        My Profile</a>
                    </li>
                    <li className="mb-8">
                        <a href="/dashboard" className="fw-medium d-flex align-items-center gap-8 text-neutral-500 hover-bg-main-600 px-24 py-12 hover-text-white rounded-12 item-hover">
                        <span className="text-20 text-main-600 item-hover__text transition-03"><i className="ph-bold ph-house"></i></span>
                        Dashboard</a>
                    </li>
                </ul>
              </div>
         </div>
        {/* ========Dashdord Sidebar end======== */}
    </div>
</section>
{/* ==========admin dashbord end============ */}
    </>
  );
}
