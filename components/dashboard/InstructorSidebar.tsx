import React from 'react';

interface InstructorSidebarProps {
  activeItem?: 'dashboard' | 'profile' | 'message' | 'enrolled' | 'wishlist' | 'reviews' | 'my-quiz' | 'order-history' | 'my-courses' | 'announcements' | 'assignments' | 'quiz-attempts' | 'settings';
}

export default function InstructorSidebar({ activeItem }: InstructorSidebarProps) {
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
      <div className="student-dashboard-sidebar px-20 py-24 max-w-288-px bg-white rounded-10 w-100 h-100 position-relative">
        <div className="text-center">
          <img src="/assets/images/thumbs/instructor-dashboard-img1.png" alt="" className="mb-20" />
          <h5 className="mb-4 text-neutral-500">Cameron Williamson</h5>
          <span className="text-neutral-500 text-14 fw-normal mb-12">info@example.com</span>
          <ul className="d-flex align-items-center gap-4 justify-content-center text-center mb-4">
            <li className="text-16 text-warning-500"><i className="ph-fill ph-star"></i></li>
            <li className="text-16 text-warning-500"><i className="ph-fill ph-star"></i></li>
            <li className="text-16 text-warning-500"><i className="ph-fill ph-star"></i></li>
            <li className="text-16 text-warning-500"><i className="ph-fill ph-star"></i></li>
            <li className="text-16 text-warning-500"><i className="ph-fill ph-star-half"></i></li>
          </ul>
          <span className="text-14 fw-normal text-neutral-300">4.8/5 (1.5K Reviews)</span>
        </div>
        <span className="w-100 bg-main-100 mb-24 mt-24 h-1"></span>
        <div className="overflow-x-auto">
          <div className="student-dashbord-scrollbar min-w-max pb-80"> 
            <span className="text-neutral-500 fw-normal text-14 mb-8">Welcome Williamson,</span>
            <ul> 
              <li className="mb-8">
                <a href="/instructor-dashboard" className={getLinkClass('dashboard')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph-bold ph-house"></i></span>
                  Dashboard
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-my-profile" className={getLinkClass('profile')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-user-circle"></i></span>
                  My Profile
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-message" className={getLinkClass('message')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-chat-dots"></i></span>
                  Message
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-enrolled-courses" className={getLinkClass('enrolled')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-watch"></i></span>
                  Enrolled Courses
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-wishlist" className={getLinkClass('wishlist')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-bookmark-simple"></i></span>
                  Wishlist
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-reviews" className={getLinkClass('reviews')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-sparkle"></i></span>
                  Reviews
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-my-quiz-attempts" className={getLinkClass('my-quiz')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03">
                    <i className="ph ph-seal-question"></i>
                  </span>
                  My Quiz Attempts
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-order-history" className={getLinkClass('order-history')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03">
                    <i className="ph ph-shopping-cart"></i>
                  </span>
                  Order History
                </a>
              </li>

              <li className="text-neutral-500 fw-normal text-14 mb-8 mt-8">Instructor</li>

              <li className="mb-8">
                <a href="/instructor-dashboard-my-courses" className={getLinkClass('my-courses')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03">
                    <i className="ph ph-graduation-cap"></i>
                  </span>
                  My Courses
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-announcements" className={getLinkClass('announcements')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03 transform-scale-x--1px">
                    <i className="ph ph-megaphone"></i>
                  </span>
                  Announcements
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-assignment" className={getLinkClass('assignments')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03 transform-scale-x--1px">
                    <i className="ph ph-file-text"></i>
                  </span>
                  Assignments
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-quiz-attempts" className={getLinkClass('quiz-attempts')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03 transform-scale-x--1px">
                    <i className="ph ph-seal-question"></i>
                  </span>
                  Quiz Attempts
                </a>
              </li>
              <li className="mb-8">
                <a href="/instructor-dashboard-account-settings" className={getLinkClass('settings')}>
                  <span className="text-16 text-main-600 item-hover__text transition-03"><i className="ph ph-gear"></i></span>
                  Account Settings
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
