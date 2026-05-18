'use client';
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="header">
    <div className="container container--xl">
        <nav className="header-inner flex-between gap-8">

            <div className="header-content-wrapper flex-align flex-grow-1">
                {/* Logo Start */}
                <div className="logo">
                    <a href="/" className="link">
                        <img src="/assets/images/logo/logo.png" alt="Logo" />
                    </a>
                </div>
                {/* Logo End  */}
    
                {/* Select Start */}
                <div className="d-sm-block d-none">
                    <div className="header-select border border-neutral-30 bg-main-25 rounded-pill position-relative">
    <span className="select-icon d-xxl-block d-none position-absolute top-50 translate-middle-y inset-inline-start-0 z-1 ms-lg-4 ms-12 text-xl pointer-event-none d-flex">
        <i className="ph-bold ph-squares-four"></i>
    </span>
    <select className="js-example-basic-single border-0" name="state">
        <option value="1" selected disabled>Categories</option>
        <option value="1">Design</option>
        <option value="1">Development</option>
        <option value="1">Architecture</option>
        <option value="1">Life Style</option>
        <option value="1">Data Science</option>
        <option value="1">Marketing</option>
        <option value="1">Music</option>
        <option value="1">Typography</option>
        <option value="1">Finance</option>
        <option value="1">Motivation</option>
    </select>
</div>
                </div>
                {/* Select End */}
    
                {/* Menu Start  */}
                <div className="header-menu d-lg-block d-none">
                    
<ul className="nav-menu flex-align ">
    <li className="nav-menu__item has-submenu activePage">
        <a href="#" className="nav-menu__link">Home</a>
        <ul className="nav-submenu scroll-sm">
            <li className="nav-submenu__item activePage">
                <a href="/" className="nav-submenu__link hover-bg-neutral-30"> Home LMS</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/index-2" className="nav-submenu__link hover-bg-neutral-30"> Home Online Course</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/index-3" className="nav-submenu__link hover-bg-neutral-30"> Home University</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/index-4" className="nav-submenu__link hover-bg-neutral-30"> Home Tutor</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/index-5" className="nav-submenu__link hover-bg-neutral-30"> Home Kindergarten</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/index-6" className="nav-submenu__link hover-bg-neutral-30"> Home Kindergarten two</a>
            </li>
        </ul>   
    </li>
    <li className="nav-menu__item has-submenu">
        <a href="#" className="nav-menu__link">Courses</a>
         <ul className="nav-submenu scroll-sm">
            <li className="nav-submenu__item">
                <a href="/course" className="nav-submenu__link hover-bg-neutral-30"> Course Grid View</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/course-list-view" className="nav-submenu__link hover-bg-neutral-30"> Course List View</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/course-details" className="nav-submenu__link hover-bg-neutral-30"> Course Details</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/lesson-details" className="nav-submenu__link hover-bg-neutral-30"> Lesson Details</a>
            </li>
        </ul>
    </li>
    <li className="nav-menu__item has-submenu">
        <a href="#" className="nav-menu__link">Pages</a>
         <ul className="nav-submenu scroll-sm">
            <li className="nav-submenu__item">
                <a href="/about" className="nav-submenu__link hover-bg-neutral-30"> About</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/about-two" className="nav-submenu__link hover-bg-neutral-30"> About Two</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/about-three" className="nav-submenu__link hover-bg-neutral-30"> About Three</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/about-four" className="nav-submenu__link hover-bg-neutral-30"> About Four</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/pricing-plan" className="nav-submenu__link hover-bg-neutral-30">Pricing Plan</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor" className="nav-submenu__link hover-bg-neutral-30"> Instructor</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-two" className="nav-submenu__link hover-bg-neutral-30"> Instructor Two</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-details" className="nav-submenu__link hover-bg-neutral-30"> Instructor Details</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/tutor" className="nav-submenu__link hover-bg-neutral-30"> Premium Tutors</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/tutor-details" className="nav-submenu__link hover-bg-neutral-30"> Premium Tutors Details</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/faq" className="nav-submenu__link hover-bg-neutral-30">FAQ</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/tuition-jobs" className="nav-submenu__link hover-bg-neutral-30">Tuition Jobs</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/events" className="nav-submenu__link hover-bg-neutral-30">Events</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/event-details" className="nav-submenu__link hover-bg-neutral-30">Event Details</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/apply-admission" className="nav-submenu__link hover-bg-neutral-30">Apply Admission</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/gallery" className="nav-submenu__link hover-bg-neutral-30">Gallery</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/privacy-policy" className="nav-submenu__link hover-bg-neutral-30">Privacy Policy</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/favorite-course" className="nav-submenu__link hover-bg-neutral-30">Favorite Course</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/find-tutors" className="nav-submenu__link hover-bg-neutral-30">Find Best Tutors</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/book-online-class" className="nav-submenu__link hover-bg-neutral-30">Book Online Class</a>
            </li>
        </ul>
    </li>
    <li className="nav-menu__item has-submenu">
        <a href="#" className="nav-menu__link">Dashboard</a>
         <ul className="nav-submenu scroll-sm">
            <li className="nav-submenu__item">
                <a href="/admin-dashbord" className="nav-submenu__link hover-bg-neutral-30"> Admin Dashbord</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/my-profile" className="nav-submenu__link hover-bg-neutral-30">My Profile</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/dashbord-message" className="nav-submenu__link hover-bg-neutral-30">Message</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/dashbord-courses" className="nav-submenu__link hover-bg-neutral-30">Courses</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/dashbord-wishlist" className="nav-submenu__link hover-bg-neutral-30">Wishlist</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/deshbord-reviews" className="nav-submenu__link hover-bg-neutral-30">Reviews</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/dashbord-quiz-attempts" className="nav-submenu__link hover-bg-neutral-30">Quiz Attempts</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/dashbord-settings" className="nav-submenu__link hover-bg-neutral-30">Settings</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord" className="nav-submenu__link hover-bg-neutral-30">Student Admin Dashbord</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-my-profile" className="nav-submenu__link hover-bg-neutral-30">Student My Profile</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-message" className="nav-submenu__link hover-bg-neutral-30">Student Message</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-enrolled-courses" className="nav-submenu__link hover-bg-neutral-30">Student Enrolled Courses</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-wishlist" className="nav-submenu__link hover-bg-neutral-30">Student Wishlist</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-reviews" className="nav-submenu__link hover-bg-neutral-30">Student Reviews</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-my-quiz-attempts" className="nav-submenu__link hover-bg-neutral-30">Student My Quiz Attempts</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-assignment" className="nav-submenu__link hover-bg-neutral-30">Student Assignment</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/student-dashbord-settings" className="nav-submenu__link hover-bg-neutral-30">Student Settings</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard" className="nav-submenu__link hover-bg-neutral-30">Instructor Dashbord</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-my-profile" className="nav-submenu__link hover-bg-neutral-30">Instructor My Profile</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-message" className="nav-submenu__link hover-bg-neutral-30">Instructor Message</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-enrolled-courses" className="nav-submenu__link hover-bg-neutral-30">Instructor Enrolled Courses</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-wishlist" className="nav-submenu__link hover-bg-neutral-30">Instructor Wishlist</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-reviews" className="nav-submenu__link hover-bg-neutral-30">Instructor Reviews</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-my-quiz-attempts" className="nav-submenu__link hover-bg-neutral-30">Instructor My Quiz Attempts</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-order-history" className="nav-submenu__link hover-bg-neutral-30">Instructor Order History</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-my-courses" className="nav-submenu__link hover-bg-neutral-30">Instructor My Courses</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-announcements" className="nav-submenu__link hover-bg-neutral-30">Instructor Announcements</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-assignment" className="nav-submenu__link hover-bg-neutral-30">Instructor Assignment</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-quiz-attempts" className="nav-submenu__link hover-bg-neutral-30">Instructor Quiz Attempts</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/instructor-dashboard-account-settings" className="nav-submenu__link hover-bg-neutral-30">Instructor Account Settings</a>
            </li>
        </ul>
    </li>
    <li className="nav-menu__item has-submenu">
        <a href="#" className="nav-menu__link">Product</a>
         <ul className="nav-submenu scroll-sm">
            <li className="nav-submenu__item">
                <a href="/product" className="nav-submenu__link hover-bg-neutral-30"> Product</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/product-details" className="nav-submenu__link hover-bg-neutral-30"> Product Details</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/cart" className="nav-submenu__link hover-bg-neutral-30">Cart</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/checkout" className="nav-submenu__link hover-bg-neutral-30">Checkout</a>
            </li>
        </ul>
    </li>
    <li className="nav-menu__item has-submenu">
        <a href="#" className="nav-menu__link">Blog</a>
         <ul className="nav-submenu scroll-sm">
            <li className="nav-submenu__item">
                <a href="/blog" className="nav-submenu__link hover-bg-neutral-30"> Blog Grid</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/blog-list" className="nav-submenu__link hover-bg-neutral-30"> Blog List</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/blog-classic" className="nav-submenu__link hover-bg-neutral-30"> Blog Classic</a>
            </li>
            <li className="nav-submenu__item">
                <a href="/blog-details" className="nav-submenu__link hover-bg-neutral-30"> Blog Details</a>
            </li>
        </ul>
    </li>
    <li className="nav-menu__item">
        <a href="/contact" className="nav-menu__link">Contact</a>
    </li>
</ul>
                </div>
                {/* Menu End  */}
            </div>

            {/* Header Right start */}
            <div className="header-right flex-align">
                <form action="#" className="search-form position-relative d-xl-block d-none">
                    <input type="text" className="common-input rounded-pill bg-main-25 pe-48 border-neutral-30" placeholder="Search..." />
                    <button type="submit" className="w-36 h-36 bg-main-600 hover-bg-main-700 rounded-circle flex-center text-md text-white position-absolute top-50 translate-middle-y inset-inline-end-0 me-8">
                        <i className="ph-bold ph-magnifying-glass"></i>
                    </button>
                </form>
                <a href="/sign-in" className="info-action w-52 h-52 bg-main-25 hover-bg-main-600 border border-neutral-30 rounded-circle flex-center text-2xl text-neutral-500 hover-text-white hover-border-main-600">
                    <i className="ph ph-user-circle"></i>
                </a>
                <button type="button" className="toggle-mobileMenu d-lg-none text-neutral-200 flex-center">
                    <i className="ph ph-list"></i> 
                </button>
            </div>
            {/* Header Right End  */}
        </nav>
    </div>
</header>
    </>
  );
};

export default Header;
