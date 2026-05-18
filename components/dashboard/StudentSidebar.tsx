import React from 'react';

interface StudentSidebarProps {
  activeItem?: 'dashboard' | 'profile' | 'message' | 'courses' | 'wishlist' | 'reviews' | 'quiz' | 'assignment' | 'settings';
}

export default function StudentSidebar({ activeItem }: StudentSidebarProps) {
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
      <div className="student-dashboard-sidebar px-20 py-24 max-w-288-px bg-white rounded-10 w-100 position-relative">
        <div className="text-center">
          <img src="/assets/images/thumbs/student-dashbord-img-1.png" alt="" className="mb-20" />
          <h5 className="mb-4 text-neutral-500">Wade Warren</h5>
          <span className="text-neutral-500 text-14 fw-normal">info@example.com</span>
        </div>
        <span className="w-100 bg-neutral-40 mb-24 mt-24 h-1"></span>
        <div className="overflow-x-auto">
          <div className="student-dashbord-scrollbar min-w-max"> 
            <span className="text-neutral-500 fw-normal text-14 mb-8">Welcome Warren,</span>
            <ul>
              <li className="mb-8">
                <a href="/student-dashbord" className={getLinkClass('dashboard')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph-bold ph-house"></i></span>
                  Dashboard
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-my-profile" className={getLinkClass('profile')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-user-circle"></i></span>
                  My Profile
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-message" className={getLinkClass('message')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-chat-dots"></i></span>
                  Message
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-enrolled-courses" className={getLinkClass('courses')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-watch"></i></span>
                  Enrolled Courses
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-wishlist" className={getLinkClass('wishlist')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-bookmark-simple"></i></span>
                  Wishlist
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-reviews" className={getLinkClass('reviews')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-sparkle"></i></span>
                  Reviews
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-my-quiz-attempts" className={getLinkClass('quiz')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-seal-question"></i></span>
                  Quiz Attempts
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-assignment" className={getLinkClass('assignment')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-file-text"></i></span>
                  Assignment
                </a>
              </li>
              <li className="mb-8">
                <a href="/student-dashbord-settings" className={getLinkClass('settings')}>
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
