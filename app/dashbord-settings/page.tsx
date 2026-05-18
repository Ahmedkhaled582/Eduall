import React from 'react';
import Preloader from '@/components/layout/Preloader';
import ProgressWrap from '@/components/layout/ProgressWrap';
import Overlay from '@/components/layout/Overlay';
import MobileMenu from '@/components/layout/MobileMenu';
import AdminSidebar from '@/components/dashboard/AdminSidebar';
import AdminNavbar from '@/components/dashboard/AdminNavbar';
import AdminSettingsSection from '@/components/dashboard/AdminSettingsSection';
import AdminFooter from '@/components/dashboard/AdminFooter';

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
      
      <div className="dashbord bg-main-25 w-100 overflow-hidden">
        <div className="d-flex">
          <AdminSidebar activeItem="settings" />
          <div className="dashbord-body flex-grow-1">
            <AdminNavbar />
            <AdminSettingsSection />
            <AdminFooter />
          </div>
        </div>
      </div>
    </>
  );
}
