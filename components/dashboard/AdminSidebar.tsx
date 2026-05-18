import React from 'react';

interface AdminSidebarProps {
  activeItem?: 'dashboard' | 'profile' | 'message' | 'courses' | 'wishlist' | 'reviews' | 'quiz' | 'settings';
}

export default function AdminSidebar({ activeItem }: AdminSidebarProps) {
  const getLinkClass = (item: string) => {
    const baseClass = "fw-medium d-flex align-items-center text-14 gap-8 text-neutral-500 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap";
    if (activeItem === item) {
      return `${baseClass} bg-main-600 text-white`;
    }
    return baseClass;
  };

  return (
    <>
      {/* ========Dashdord Sidebar start======== */}
      <div className="dashboard-sidebar px-20 py-24 max-w-288-px bg-white w-100 border-end border-neutral-40 position-relative">
        <a href="#">
          <img src="/assets/images/logo/logo.png" alt="" className="" />
        </a>
        <span className="w-100 bg-neutral-40 mb-24 mt-24 h-1"></span>
        <div className="overflow-x-auto">
          <div className="scrollbar min-w-max"> 
            <span className="text-neutral-500 fw-normal text-14 mb-8">Welcome Henry,</span>
            <ul>
              <li className="mb-8">
                <a href="/admin-dashbord" className={getLinkClass('dashboard')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph-bold ph-house"></i></span>
                  Dashboard
                </a>
              </li>
              <li className="mb-8">
                <a href="/my-profile" className={getLinkClass('profile')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-user-circle"></i></span>
                  My Profile
                </a>
              </li>
              <li className="mb-8">
                <a href="/dashbord-message" className={getLinkClass('message')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-chat-dots"></i></span>
                  Message
                </a>
              </li>
              <li className="mb-8">
                <a href="/dashbord-courses" className={getLinkClass('courses')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-watch"></i></span>
                  Courses
                </a>
              </li>
              <li className="mb-8">
                <a href="/dashbord-wishlist" className={getLinkClass('wishlist')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-bookmark-simple"></i></span>
                  Wishlist
                </a>
              </li>
              <li className="mb-8">
                <a href="/deshbord-reviews" className={getLinkClass('reviews')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-sparkle"></i></span>
                  Reviews
                </a>
              </li>
              <li className="mb-8">
                <a href="/dashbord-quiz-attempts" className={getLinkClass('quiz')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-seal-question"></i></span>
                  Quiz Attempts
                </a>
              </li>
              <li className="mb-8">
                <span className="fw-normal text-14 text-neutral-500">Admin</span>
              </li>
              <li className="mb-8">
                <a href="/dashbord-settings" className={getLinkClass('settings')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-gear"></i></span>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="position-absolute inset-block-end-0 inset-inline-start-0 pb-16 px-16 w-100">
          <a href="/sign-in" className="text-14 fw-medium text-neutral-500 d-flex align-items-center gap-8 hover-bg-main-600 px-24 py-10 hover-text-white rounded-12 item-hover flex-wrap bg-white">
            <span className="text-16 text-main-600 item-hover__text transition-03">
              <i className="ph ph-sign-out"></i>
            </span>
            Logout
          </a>
        </div>
      </div>
      {/* ========Dashdord Sidebar end======== */}
    </>
  );
}
